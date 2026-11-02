import type { Kit } from '../../kit';
import { CROSS, flamingoZ, stripX } from '../../streets';
import { mast } from './mast';
import { NAMES } from './streetNames';

/** Corner poles stand this far from the cross street and from Flamingo's centre line. */
const BACK = 16;

/**
 * Far-side signal masts at each named cross street: one on the south-east
 * corner over the eastbound lanes (lenses west), one on the north-west corner
 * over the westbound lanes (lenses east).
 */
export function buildSignals(k: Kit, half: (x: number) => number) {
  for (const id of Object.keys(NAMES)) {
    const x = CROSS[id as keyof typeof CROSS];
    const z = flamingoZ(x), off = half(x);
    mast(k, k.frame(x + BACK, z + off, 270), off - 3, `street_${id}`, -1);
    mast(k, k.frame(x - BACK, z - off, 90), off - 3, `street_${id}`, -1);
  }
}
