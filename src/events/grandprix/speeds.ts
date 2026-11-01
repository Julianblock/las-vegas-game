import type { Loop } from './loop';

const STEP = 5;
const TOP = 95;
const SLOWEST = 20;
const GRIP = 38;
const ACCEL = 11;
const BRAKE = 42;

/**
 * The racing speed around a loop, sampled every few metres: as fast as grip
 * allows through each corner, capped near 340 km/h, then smoothed so the car
 * brakes before turns and accelerates out of them.
 */
export class SpeedProfile {
  private readonly v: Float32Array;

  constructor(private readonly loop: Loop) {
    const n = Math.ceil(loop.length / STEP);
    const v = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const k = loop.curvature(i * STEP, 15);
      v[i] = Math.max(SLOWEST, Math.min(TOP, Math.sqrt(GRIP / Math.max(k, 1e-5))));
    }
    for (let lap = 0; lap < 2; lap++) {
      for (let i = 1; i <= n; i++) {
        const a = v[(i - 1) % n], j = i % n;
        v[j] = Math.min(v[j], Math.sqrt(a * a + 2 * ACCEL * STEP));
      }
      for (let i = n - 2; i >= -1; i--) {
        const j = (i + n) % n, b = v[(i + 1 + n) % n];
        v[j] = Math.min(v[j], Math.sqrt(b * b + 2 * BRAKE * STEP));
      }
    }
    this.v = v;
  }

  /** Speed in m/s at distance s along the loop. */
  at(s: number) {
    const f = this.loop.wrap(s) / STEP;
    const i = Math.floor(f), t = f - i;
    const n = this.v.length;
    return this.v[i % n] * (1 - t) + this.v[(i + 1) % n] * t;
  }
}
