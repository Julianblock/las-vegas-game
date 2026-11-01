import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { camel } from '../../parts/camel';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { STRIP_HALF, stripX } from '../../streets';
import { saharaCrown, saharaLED } from './signs';
import { saharaStyle } from './style';

/**
 * The Sahara (1952), the north anchor of the old Strip: its name on both faces
 * of the Alexandria tower, the corner marquee at Sahara Avenue, and a pair of
 * camels like the fibreglass caravan that once flanked the porte-cochère.
 */
function buildSahara(k: Kit) {
  k.sign(k.frame(3040.6, -2931, 270), 'saharaCrown', 0, 72, 0.6, 7, 1.35, FX.NEON);
  k.sign(k.frame(3063.4, -2931, 90), 'saharaCrown', 0, 72, 0.6, 7, 1.35, FX.NEON);
  const z = -2995;
  const walk = k.frame(stripX(z) + STRIP_HALF - 2, z, 270);
  pylon(k, walk, 0, 0, { crown: 'saharaCrown', screen: 'saharaLED', h: 30, w: 16, color: '#6a4a22', crownH: 3.4 });
  palmRow(k, walk, -6, 4, 230, 4, 13, 13);
  for (const u of [24, 34]) camel(k, walk, u, 0.6, -14, 2.4);
  k.box(walk, 29, 0, -14, 16, 0.6, 5, '#d8c49a', { rough: 0.9 });
}

export const sahara: Resort = {
  id: 'sahara',
  name: 'Sahara',
  signs: [saharaCrown, saharaLED],
  style: saharaStyle,
  build: buildSahara,
};
