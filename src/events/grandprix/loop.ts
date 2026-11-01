/** A point on the circuit: position, unit tangent (direction of travel), and left normal. */
export interface TrackPoint {
  x: number;
  z: number;
  tx: number;
  tz: number;
  nx: number;
  nz: number;
}

/** A closed polyline measured by distance, sampled anywhere along its length. */
export class Loop {
  readonly xs: number[] = [];
  readonly zs: number[] = [];
  readonly at: number[] = [];
  readonly length: number;

  constructor(flat: number[]) {
    let s = 0;
    for (let i = 0; i < flat.length; i += 2) {
      if (i > 0) s += Math.hypot(flat[i] - flat[i - 2], flat[i + 1] - flat[i - 1]);
      this.xs.push(flat[i]);
      this.zs.push(flat[i + 1]);
      this.at.push(s);
    }
    const n = this.xs.length;
    this.length = s + Math.hypot(this.xs[0] - this.xs[n - 1], this.zs[0] - this.zs[n - 1]);
  }

  /** Index of the segment containing distance s (already wrapped). */
  private segment(s: number) {
    let lo = 0, hi = this.at.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (this.at[mid] <= s) lo = mid;
      else hi = mid - 1;
    }
    return lo;
  }

  wrap(s: number) {
    return ((s % this.length) + this.length) % this.length;
  }

  sample(s: number, out: TrackPoint): TrackPoint {
    s = this.wrap(s);
    const i = this.segment(s), j = (i + 1) % this.xs.length;
    const end = j === 0 ? this.length : this.at[j];
    const t = (s - this.at[i]) / Math.max(1e-6, end - this.at[i]);
    const dx = this.xs[j] - this.xs[i], dz = this.zs[j] - this.zs[i];
    const d = Math.hypot(dx, dz) || 1;
    out.x = this.xs[i] + dx * t;
    out.z = this.zs[i] + dz * t;
    out.tx = dx / d;
    out.tz = dz / d;
    out.nx = out.tz;
    out.nz = -out.tx;
    return out;
  }

  /** Heading change per metre around s, from tangents a few metres either side. */
  curvature(s: number, span = 12) {
    const a = this.sample(s - span, blank()), b = this.sample(s + span, blank());
    const turn = Math.atan2(a.tx * b.tz - a.tz * b.tx, a.tx * b.tx + a.tz * b.tz);
    return Math.abs(turn) / (2 * span);
  }
}

export function blank(): TrackPoint {
  return { x: 0, z: 0, tx: 1, tz: 0, nx: 0, nz: -1 };
}
