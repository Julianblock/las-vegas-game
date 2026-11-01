import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import { sphinx } from '../../parts/sphinx';
import type { Resort } from '../../resort';
import { SkyBeam } from './beam';
import { luxorCrown, luxorLED } from './signs';

/**
 * The Luxor's Strip approach: the Great Sphinx guarding the drive (larger
 * than the one at Giza), the marquee, and date palms down the avenue to the
 * pyramid. Frame on the west walk, facing the Strip; local x north.
 */
function buildApproach(k: Kit) {
  const fr = k.frame(1498, 2250, 90);
  const s = k.frame(1440, 2250, 90);
  k.reserve(s, 0, 0, 16, 40);
  sphinx(k, s, 0, 0, 30);
  pylon(k, fr, 46, 2, { crown: 'luxorCrown', screen: 'luxorLED', h: 30, w: 16, color: '#1a1a14', crownH: 3 });
  palmRow(k, fr, -70, -12, -70, -150, 14, 13);
  palmRow(k, fr, 70, -12, 70, -150, 14, 13);
  k.sign(k.frame(1502, 2276, 90), 'luxorCrown', 0, 40, 5.6, 2.4, 1.3, FX.NEON);
}

export const luxor: Resort = {
  id: 'luxor',
  name: 'Luxor',
  signs: [luxorCrown, luxorLED],
  build: buildApproach,
  shows: (hf) => [new SkyBeam(hf)],
};
