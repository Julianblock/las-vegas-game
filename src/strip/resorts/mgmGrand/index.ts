import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { buildLion } from './lion';
import { mgmCrown, mgmLED } from './signs';

/** The crown on the west wing's south face, and the marquee on the Strip walk north of the lion. */
function buildSigns(k: Kit) {
  const wing = k.frame(1711, 1516.2, 180);
  k.sign(wing, 'mgmCrown', 0, 54, 0.6, 6, 1.35, FX.NEON);
  const walk = k.frame(1582, 1560, 270);
  pylon(k, walk, 0, 0, { crown: 'mgmCrown', screen: 'mgmLED', h: 34, w: 18, color: '#0a3a1e', crownH: 3.6 });
}

export const mgmGrand: Resort = {
  id: 'mgmGrand',
  name: 'MGM Grand',
  signs: [mgmCrown, mgmLED],
  build(k) {
    buildLion(k);
    buildSigns(k);
  },
};
