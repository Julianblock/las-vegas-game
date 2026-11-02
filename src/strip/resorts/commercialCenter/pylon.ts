import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The plaza's pylon on the Sahara frontage: twin steel legs, the name panel
 * on top, the tenant board under it, read from both directions on Sahara.
 */
export function pylon(k: Kit, x: number, z: number) {
  const fr = k.frame(x, z, 90);
  k.box(fr, 0, -0.4, 0, 6, 0.8, 1.6, '#c8b898', { rough: 0.9 });
  for (const u of [-2.2, 2.2]) k.box(fr, u, 0, 0, 0.5, 13, 0.5, '#e8e0d0', { rough: 0.6 });
  k.sign(fr, 'commercialCenterName', 0, 11.5, 0, 3.4, 1.2, FX.NEON, 0, true);
  k.sign(fr, 'commercialCenterBoard', 0, 8.7, 0, 1.1, 0.8, FX.NONE, 0, true);
}
