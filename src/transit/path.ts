/** A polyline in world x, z sampled by distance along it. */
export class Path {
  readonly pts: number[];
  private cum: number[] = [0];
  readonly length: number;

  constructor(pts: number[]) {
    this.pts = pts;
    for (let i = 2; i < pts.length; i += 2) {
      this.cum.push(this.cum[this.cum.length - 1] + Math.hypot(pts[i] - pts[i - 2], pts[i + 1] - pts[i - 1]));
    }
    this.length = this.cum[this.cum.length - 1];
  }

  /** Point and unit heading at distance `s` (wrapped round the length). */
  at(s: number, out = { x: 0, z: 0, dx: 1, dz: 0 }) {
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
