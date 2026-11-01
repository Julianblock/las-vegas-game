import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { pylon } from '../../parts/pylon';
import { FLAMINGO_HALF, flamingoZ } from '../../streets';

/**
 * Gold Coast's name across the slab's Flamingo face and its tall marquee on
 * the north kerb, the first thing drivers see coming off Valley View.
 */
export function buildGoldCoast(k: Kit) {
  const face = k.frame(-234, -109.4, 180);
  k.sign(face, 'goldCoastCrown', 0, 30, 0.6, 5, 1.3, FX.NEON);
  k.box(face, 0, 37.4, -10.5, 176, 1.2, 21.6, '#c8a040', { rough: 0.4, fx: FX.METAL });
  const x = -180;
  const fr = k.frame(x, flamingoZ(x) - FLAMINGO_HALF - 8, 90);
  pylon(k, fr, 0, 0, { crown: 'goldCoastCrown', screen: 'goldCoastLED', h: 28, w: 15, color: '#b8862a', crownH: 4 });
}
