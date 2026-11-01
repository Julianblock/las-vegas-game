import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { elvis } from '../../parts/elvis';
import { faceFrame } from '../../parts/face';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { westgateCrown, westgateLED } from './signs';
import { westgateStyle } from './style';

/**
 * The Westgate, opened in 1969 as the International (then the Las Vegas
 * Hilton, then the LVH), where Elvis played 837 straight sell-outs: red
 * WESTGATE across its Y wings, the King in bronze out front, and its giant
 * marquee on Paradise Road.
 */
function buildWestgate(k: Kit) {
  for (const [ax, az, bx, bz, cx, cz] of [
    [3496, -2217, 3586, -2216, 3540, -2229],
    [3497, -2241, 3586, -2242, 3540, -2229],
    [3382, -2356, 3447, -2245, 3430, -2300],
  ]) k.sign(faceFrame(k, ax, az, bx, bz, cx, cz, 0.6).fr, 'westgateCrown', 0, 104, 0, 8, 1.4, FX.NEON);
  pylon(k, k.frame(3200, -2290, 0), 0, 0, { crown: 'westgateCrown', screen: 'westgateLED', h: 48, w: 22, color: '#2a1c18', crownH: 4 });
  const front = k.frame(3330, -2250, 270);
  elvis(k, front, 0, 0, 2.8);
  palmRow(k, k.frame(3196, -2250, 270), -120, 0, 120, 0, 14, 13);
}

export const westgate: Resort = {
  id: 'westgate',
  name: 'Westgate',
  signs: [westgateCrown, westgateLED],
  style: westgateStyle,
  build: buildWestgate,
};
