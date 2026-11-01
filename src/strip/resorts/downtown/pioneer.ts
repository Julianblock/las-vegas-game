import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { FREMONT, onFremont } from './fremont';

/** The old Pioneer Club at Fremont and 1st, a souvenir shop now, with Vegas Vic on its corner. */
export function buildPioneer(k: Kit) {
  const p = onFremont(102, FREMONT.width / 2 + 12);
  const fr = k.frame(p.x, p.z, FREMONT.bearing - 90, 14, 12);
  k.box(fr, 0, -1, 0, 26, 10, 22, '#7a4a2a', { rough: 0.8 });
  k.storefront(fr, 0, 11.1, 22, 4);
  k.box(fr, 0, 9, 0, 27, 0.8, 23, '#3a2414', { rough: 0.7 });
  k.sign(fr, 'vegasVic', 8, 18, 9, 15, 1.6, FX.NEON);
}
