import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { mandalayCrown, mandalayLED, wCrown } from './signs';

/** Mandalay's three wing tips (from the OSM outline) and the bearings they face. */
const TIPS: [number, number, number][] = [
  [1367, 2580.5, 0],
  [1458.5, 2737, 120],
  [1277.5, 2736.5, 240],
];

/**
 * Mandalay Bay (1999), the last gold Y of the Steve Wynn lineage, its name
 * on each wing tip; the W (once THEhotel, then Delano) beside it with its
 * single letter; the Strip marquee by the long palm drive.
 */
function buildMandalay(k: Kit) {
  for (const [x, z, deg] of TIPS) k.sign(k.frame(x, z, deg), 'mandalayCrown', 0, 136, 0.6, 1.9, 1.35, FX.NEON);
  for (const [x, z, deg] of [[1099, 2502, 315], [1182, 2578, 135]] as const) k.sign(k.frame(x, z, deg), 'wCrown', 0, 138, 0.6, 7, 1.4, FX.NEON);
  const walk = k.frame(1500, 2560, 90);
  pylon(k, walk, 0, 2, { crown: 'mandalayCrown', screen: 'mandalayLED', h: 32, w: 17, color: '#3a2a10', crownH: 3.2 });
  palmRow(k, walk, -20, -8, -20, -110, 12, 14);
  palmRow(k, walk, 20, -8, 20, -110, 12, 14);
}

export const mandalay: Resort = {
  id: 'mandalay',
  name: 'Mandalay Bay and W',
  signs: [mandalayCrown, mandalayLED, wCrown],
  build: buildMandalay,
};
