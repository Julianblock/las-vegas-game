import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import { FLAMINGO_HALF, flamingoZ, nearCross } from '../../streets';

/**
 * The Palms on Flamingo Road: the marquee pylon on the south kerb opposite
 * the Gold Coast, and the date palms the resort is named for lining the
 * frontage from Valley View to Arville.
 */
export function buildMarquee(k: Kit) {
  const x = -330;
  const fr = k.frame(x, flamingoZ(x) + FLAMINGO_HALF + 8, 90);
  pylon(k, fr, 0, 0, { crown: 'palmsCrown', screen: 'palmsLED', h: 30, w: 15, color: '#e8e2d4', crownH: 6 });
  for (let px = -820; px <= -60; px += 14) {
    if (Math.abs(px - x) < 12 || nearCross(px)) continue;
    palm(k, k.frame(px, flamingoZ(px) + FLAMINGO_HALF + 4, 0), 0, 0, 14, px);
  }
}
