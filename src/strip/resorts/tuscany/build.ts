import type { Kit } from '../../kit';
import { pylon } from '../../parts/pylon';
import { FLAMINGO_HALF, flamingoZ } from '../../streets';

/** Tuscany's marquee on the north kerb of East Flamingo. */
export function buildTuscany(k: Kit) {
  const x = 2350;
  const fr = k.frame(x, flamingoZ(x) - FLAMINGO_HALF - 6, 90);
  pylon(k, fr, 0, 0, { crown: 'tuscanyCrown', screen: 'tuscanyLED', h: 20, w: 12, color: '#6a3a1a', crownH: 3 });
}
