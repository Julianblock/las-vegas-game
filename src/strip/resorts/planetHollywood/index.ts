import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { faceFrame } from '../../parts/face';
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
  // The tower is a chevron pointing at the Strip; a crown on each wing.
  for (const [ax, az, bx, bz, cx, cz] of [
    [1697, 560, 1667, 623, 1705, 600],
    [1667, 691, 1698, 755, 1705, 715],
  ]) k.sign(faceFrame(k, ax, az, bx, bz, cx, cz, 0.6).fr, 'phCrown', 0, 112, 0, 10, 1.4, FX.NEON);
  // The two lower wings in front carry the video walls on their outer faces.
  for (const [ax, az, bx, bz, cx, cz] of [
    [1641, 586, 1677, 603, 1655, 605],
    [1641, 728, 1677, 711, 1655, 710],
  ]) k.sign(faceFrame(k, ax, az, bx, bz, cx, cz, 0.6).fr, 'phWall', 0, 44, 0, 52, 1.3);
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
