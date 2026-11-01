import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/** A conifer standing at local (x, y, z): trunk and three stacked cones. */
export function pine(k: Kit, fr: Frame, x: number, y: number, z: number, h = 9) {
  k.cyl(fr, x, y - 0.5, z, 0.3, 0.22, h * 0.3, '#4a3222', { rough: 0.9 }, 5);
  for (let i = 0; i < 3; i++) {
    const r = h * (0.28 - i * 0.07);
    k.cyl(fr, x, y + h * (0.2 + i * 0.24), z, r, 0.15, h * 0.42, i % 2 ? '#2e4a2a' : '#26402a', { rough: 0.9 }, 7);
  }
}
