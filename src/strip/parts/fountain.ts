import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/** A rectangular reflecting pool, coping and a line of lit jets down its centre. */
export function reflectingPool(k: Kit, fr: Frame, x: number, z: number, w: number, d: number, jets = 0) {
  k.box(fr, x, -0.4, z, w + 1.2, 0.75, d + 1.2, '#e6dfd0', { rough: 0.7 });
  k.box(fr, x, -0.3, z, w, 0.72, d, '#3a8ab0', { rough: 0.08, glow: 0.12 });
  const long = w > d;
  for (let i = 0; i < jets; i++) {
    const t = (i + 0.5) / jets - 0.5;
    const jx = long ? x + t * w * 0.9 : x;
    const jz = long ? z : z + t * d * 0.9;
    k.cyl(fr, jx, 0.4, jz, 0.25, 0.05, 3.5, '#e8f4ff', { rough: 0.2, glow: 0.5 }, 6);
  }
}

/** A round tiered fountain: basin, stem, upper bowl and a plume. */
export function tieredFountain(k: Kit, fr: Frame, x: number, z: number, r = 6) {
  k.cyl(fr, x, -0.3, z, r, r, 0.9, '#e2dccf', { rough: 0.7 }, 24);
  k.cyl(fr, x, -0.2, z, r - 0.5, r - 0.5, 0.95, '#3a8ab0', { rough: 0.08, glow: 0.12 }, 24);
  k.cyl(fr, x, 0.6, z, 0.6, 0.5, 2.4, '#e2dccf', { rough: 0.7 }, 10);
  k.cyl(fr, x, 3, z, r * 0.35, r * 0.4, 0.5, '#e2dccf', { rough: 0.7 }, 16);
  k.cyl(fr, x, 3.4, z, 0.4, 0.05, 4, '#eef8ff', { rough: 0.2, glow: 0.6 }, 8);
}
