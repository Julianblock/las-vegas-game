import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { STRIP_HALF, stripX } from '../../streets';
import { phCrown, phLED, phWall } from './signs';
import { planetHollywoodStyle } from './style';

/**
 * Planet Hollywood, the old Aladdin's tower at Harmon: its name across the top
 * of both faces, video walls on the two front towers over the Miracle Mile
 * shops, and a marquee on the boulevard.
 */
function buildPlanetHollywood(k: Kit) {
  k.sign(k.frame(1663.4, 663, 270), 'phCrown', 0, 113, 0.6, 7.5, 1.4, FX.NEON);
  k.sign(k.frame(1730.6, 663, 90), 'phCrown', 0, 113, 0.6, 7.5, 1.4, FX.NEON);
  for (const z of [599, 715]) k.sign(k.frame(1616.4, z, 270), 'phWall', 0, 44, 0.6, 52, 1.3);
  const z = 650;
  const walk = k.frame(stripX(z) + STRIP_HALF - 2, z, 270);
  pylon(k, walk, 0, 0, { crown: 'phCrown', screen: 'phLED', h: 32, w: 17, color: '#1c2a44', crownH: 3 });
  palmRow(k, walk, -60, 4, 100, 4, 13, 12);
}

export const planetHollywood: Resort = {
  id: 'planetHollywood',
  name: 'Planet Hollywood',
  signs: [phCrown, phWall, phLED],
  style: planetHollywoodStyle,
  build: buildPlanetHollywood,
};
