import type { OsmRoad } from '../../world/meta';

/** Streets a sign would face: not footways, tracks, alleys or freeways. */
const FACING = new Set(['primary', 'secondary', 'tertiary', 'residential', 'unclassified', 'trunk', 'primary_link', 'secondary_link']);

export interface RoadHit {
  /** Closest point on the street. */
  x: number;
  z: number;
  /** Unit direction of the street there. */
  dx: number;
  dz: number;
  /** Distance from the query point and the street's half-width. */
  d: number;
  half: number;
}

/** A coarse grid of street segments for nearest-street queries. */
export class RoadIndex {
  private cells = new Map<number, number[]>();
  private segs: number[] = [];

  constructor(roads: OsmRoad[], readonly cell = 100) {
    for (const r of roads) {
      if (!FACING.has(r.kind)) continue;
      const half = (r.lanes || 2) * 1.8 + 1;
      for (let i = 0; i + 3 < r.pts.length; i += 2) {
        const s = this.segs.length;
        this.segs.push(r.pts[i], r.pts[i + 1], r.pts[i + 2], r.pts[i + 3], half);
        const x0 = Math.floor(Math.min(r.pts[i], r.pts[i + 2]) / cell);
        const x1 = Math.floor(Math.max(r.pts[i], r.pts[i + 2]) / cell);
        const z0 = Math.floor(Math.min(r.pts[i + 1], r.pts[i + 3]) / cell);
        const z1 = Math.floor(Math.max(r.pts[i + 1], r.pts[i + 3]) / cell);
        for (let cx = x0; cx <= x1; cx++) for (let cz = z0; cz <= z1; cz++) this.bucket(cx, cz).push(s);
      }
    }
  }

  private bucket(cx: number, cz: number) {
    const key = cx * 100003 + cz;
    let b = this.cells.get(key);
    if (!b) this.cells.set(key, (b = []));
    return b;
  }

  /** Nearest facing street within `max` metres, or null. */
  nearest(x: number, z: number, max = 120): RoadHit | null {
    let best: RoadHit | null = null;
    const r = Math.ceil(max / this.cell);
    const cx = Math.floor(x / this.cell);
    const cz = Math.floor(z / this.cell);
    for (let i = -r; i <= r; i++) {
      for (let j = -r; j <= r; j++) {
        const b = this.cells.get((cx + i) * 100003 + cz + j);
        if (!b) continue;
        for (const s of b) {
          const [ax, az, bx, bz, half] = this.segs.slice(s, s + 5);
          const ex = bx - ax;
          const ez = bz - az;
          const len2 = ex * ex + ez * ez || 1;
          const t = Math.max(0, Math.min(1, ((x - ax) * ex + (z - az) * ez) / len2));
          const px = ax + ex * t;
          const pz = az + ez * t;
          const d = Math.hypot(x - px, z - pz);
          if (d < max && (!best || d < best.d)) {
            const l = Math.sqrt(len2);
            best = { x: px, z: pz, dx: ex / l, dz: ez / l, d, half };
          }
        }
      }
    }
    return best;
  }
}
