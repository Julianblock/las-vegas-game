import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { pylon } from '../../parts/pylon';

/**
 * The Strip entrance: the red deco name over the doors and the marquee
 * pylon at the north end of the bridge. Same frame convention as the bridge.
 */
export function buildFrontage(k: Kit) {
  const fr = k.frame(1499, 1570, 90);
  k.box(fr, 62, 9, -12, 34, 3, 1, '#1a1a2a', { rough: 0.5 });
  k.sign(fr, 'nynyCrown', 62, 10.5, -11.4, 3, 1.35, FX.NEON);
  k.storefront(fr, 62, -12.6, 30, 6, 1);
  pylon(k, fr, 80, 2, { crown: 'nynyCrown', screen: 'nynyLED', h: 30, w: 16, color: '#2a2a3a', crownH: 3 });
}
