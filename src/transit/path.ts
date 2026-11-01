/** A polyline in world x, z sampled by distance along it. */
export class Path {
  readonly pts: number[];
  /** Distance along the line to each vertex. */
  readonly cum: number[] = [0];
  readonly length: number;
  /** Optional absolute height at each vertex. */
  ys: number[] | null = null;

  constructor(pts: number[]) {
    this.pts = pts;
    for (let i = 2; i < pts.length; i += 2) {
      this.cum.push(this.cum[this.cum.length - 1] + Math.hypot(pts[i] - pts[i - 2], pts[i + 1] - pts[i - 1]));
    }
    this.length = this.cum[this.cum.length - 1];
  }

  /** Point, height and unit heading at distance `s` (wrapped round the length). */
  at(s: number, out = { x: 0, y: 0, z: 0, dx: 1, dz: 0 }) {
    s = ((s % this.length) + this.length) % this.length;
    let lo = 0, hi = this.cum.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (this.cum[mid] <= s) lo = mid;
      else hi = mid;
    }
    const seg = this.cum[hi] - this.cum[lo] || 1;
    const t = (s - this.cum[lo]) / seg;
    const ax = this.pts[lo * 2], az = this.pts[lo * 2 + 1];
    const bx = this.pts[hi * 2], bz = this.pts[hi * 2 + 1];
    out.x = ax + (bx - ax) * t;
    out.z = az + (bz - az) * t;
    out.dx = (bx - ax) / seg;
    out.dz = (bz - az) / seg;
    out.y = this.ys ? this.ys[lo] + (this.ys[hi] - this.ys[lo]) * t : 0;
    return out;
  }

  /** Distance along the path of the vertex nearest (x, z). */
  project(x: number, z: number) {
    let best = Infinity, at = 0;
    for (let i = 0; i < this.pts.length; i += 2) {
      const d = Math.hypot(this.pts[i] - x, this.pts[i + 1] - z);
      if (d < best) (best = d), (at = this.cum[i / 2]);
    }
    return { s: at, d: best };
  }
}

/** Adds vertices so no segment is longer than `step` (m). */
export function densify(pts: number[], step: number) {
  const out = [pts[0], pts[1]];
  for (let i = 2; i < pts.length; i += 2) {
    const ax = pts[i - 2], az = pts[i - 1], bx = pts[i], bz = pts[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / step));
    for (let k = 1; k <= n; k++) out.push(ax + ((bx - ax) * k) / n, az + ((bz - az) * k) / n);
  }
  return out;
}
