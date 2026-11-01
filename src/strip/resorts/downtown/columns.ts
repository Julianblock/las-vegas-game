import type { Kit } from '../../kit';
import { FREMONT, onFremont } from './fremont';

/** The canopy's white steel columns, paired either side of the mall every block or so. */
export function canopyColumns(k: Kit) {
  const len = onFremont(0).len;
  const half = FREMONT.width / 2 - 0.6;
  for (let t = 10; t < len; t += 57) {
    for (const side of [-1, 1]) {
      const p = onFremont(t, side * half);
      const fr = k.frame(p.x, p.z, FREMONT.bearing);
      k.cyl(fr, 0, -1, 0, 0.75, 0.55, 22, '#e8e8e6', { rough: 0.4 }, 12);
    }
  }
}
