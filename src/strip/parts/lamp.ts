import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/** The Strip's sodium-white boulevard light: tall pole, twin arms out over the lanes. */
export function stripLamp(k: Kit, fr: Frame, x: number, z: number, h = 12) {
  k.cyl(fr, x, -0.3, z, 0.22, 0.14, h + 0.3, '#5a5d60', { rough: 0.5 }, 8);
  for (const s of [-1, 1]) {
    k.box(fr, x, h - 0.2, z + s * 1.6, 0.15, 0.15, 3.2, '#5a5d60', { rough: 0.5 });
    k.box(fr, x, h - 0.45, z + s * 3.1, 0.5, 0.25, 0.9, '#2a2a2a', { rough: 0.4 });
    k.light(fr.p(x, h - 0.6, z + s * 3.1), 1, 0.86, 0.66, 2.2);
  }
}
