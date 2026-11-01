import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { STRIP_HALF, stripX } from '../../streets';
import { rwCrown, rwLED, rwScreen } from './signs';
import { rwStyle } from './style';

/**
 * Resorts World (2021), built on the Stardust's ground: the copper towers,
 * their crown, the LED wall on the Strip face and the kerbside marquee.
 */
function buildRW(k: Kit) {
  const face = k.frame(2190, -2068, 51.8);
  k.box(face, 0, 0, -1, 58, 30, 2.4, '#0a0a0a', { rough: 0.5 });
  k.sign(face, 'rwScreen', 0, 15, 0.4, 28.5, 1.25, FX.NONE);
  k.sign(face, 'rwCrown', 0, 194, 0.6, 9, 1.3, FX.NEON);
  k.sign(k.frame(2080, -2109, 170), 'rwCrown', 0, 194, 0.6, 9, 1.3, FX.NEON);
  const z = -2060;
  const walk = k.frame(stripX(z) - STRIP_HALF + 2, z, 90);
  pylon(k, walk, 0, 0, { crown: 'rwCrown', screen: 'rwLED', h: 32, w: 18, color: '#5a1a14', crownH: 3.6 });
  palmRow(k, walk, -70, 4, -8, 4, 12, 14);
  palmRow(k, walk, 10, 4, 70, 4, 12, 14);
}

export const resortsWorld: Resort = {
  id: 'resortsWorld',
  name: 'Resorts World',
  signs: [rwCrown, rwScreen, rwLED],
  style: rwStyle,
  build: buildRW,
};
