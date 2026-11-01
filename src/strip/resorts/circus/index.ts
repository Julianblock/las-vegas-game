import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import { bigTop } from '../../parts/tent';
import type { Resort } from '../../resort';
import { STRIP_HALF, stripX } from '../../streets';
import { buildDome, DOME } from './dome';
import { circusCrown, circusLED, lucky } from './signs';
import { circusStyle } from './style';

/** The low casino under the big-top roof (OSM), built here as a tent. */
const TENT = { x: 2383, z: -2321 };

/**
 * Circus Circus (1968), Jay Sarno's big top: the pink-and-white tent casino,
 * the name across the Skyrise tower, the Adventuredome behind, and Lucky the
 * Clown on his marquee at the Strip kerb with his lollipop.
 */
function buildCircus(k: Kit) {
  bigTop(k, k.frame(TENT.x, TENT.z, 90), 0, 0, { r: 36, wall: 9, rise: 16, a: '#ff4a8a', b: '#fff6f0', n: 28, stretch: 1.12 });
  k.sign(k.frame(2321.5, -2497, 90), 'circusCrown', 0, 88, 0.6, 10, 1.3, FX.NONE);
  k.sign(k.frame(2246.5, -2413, 90), 'circusCrown', 0, 90, 0.6, 9, 1.3, FX.NONE);
  buildDome(k);
  const z = -2350;
  const walk = k.frame(stripX(z) - STRIP_HALF + 2, z, 90);
  pylon(k, walk, 0, 0, { crown: 'circusCrown', screen: 'circusLED', h: 30, w: 16, color: '#e83a7a', crownH: 3.6 });
  k.sign(walk, 'lucky', -1, 38.5, 0, 16, 1.25, FX.NEON, 0, true);
  palmRow(k, walk, -120, 4, -10, 4, 14, 12);
  palmRow(k, walk, 12, 4, 150, 4, 14, 12);
}

export const circus: Resort = {
  id: 'circus',
  name: 'Circus Circus and Adventuredome',
  signs: [circusCrown, circusLED, lucky],
  style: circusStyle,
  build: buildCircus,
  replaces: (m, x, z) =>
    m.h < 20 && (Math.hypot(x - DOME.x, z - DOME.z) < 30 || Math.hypot(x - TENT.x, z - TENT.z) < 20),
};
