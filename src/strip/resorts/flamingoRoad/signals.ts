import type { Kit } from '../../kit';
import { CROSS, flamingoZ, stripX } from '../../streets';
import { mast } from './mast';
import { NAMES } from './streetNames';

/** Half-width of a cross street to its kerb (m). */
const CROSS_HALF = 12;

/** Corner poles stand this far from the cross street and from Flamingo's centre line. */
const BACK = 16;

/**
 * Far-side signal masts at each named cross street: one on the south-east
 * corner over the eastbound lanes (lenses west), one on the north-west corner
 * over the westbound lanes (lenses east). The cross street gets a pair too,
 * named for West or East Flamingo.
 */
/** West or East Flamingo, split at the Strip. */
const flamingoBlade = (x: number, z: number) => (x < stripX(z) ? 'street_flamingoW' : 'street_flamingoE');

export function buildSignals(k: Kit, half: (x: number) => number) {
  for (const id of Object.keys(NAMES)) {
    const x = CROSS[id as keyof typeof CROSS];
    const z = flamingoZ(x), off = half(x);
    mast(k, k.frame(x + BACK, z + off, 270), off - 3, `street_${id}`, -1);
    mast(k, k.frame(x - BACK, z - off, 90), off - 3, `street_${id}`, -1);
    const fl = flamingoBlade(x, z);
    mast(k, k.frame(x + CROSS_HALF, z - off - 4, 180), CROSS_HALF - 3, fl, -1);
    mast(k, k.frame(x - CROSS_HALF, z + off + 4, 0), CROSS_HALF - 3, fl, -1);
  }
}
