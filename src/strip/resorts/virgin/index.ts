import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { faceFrame } from '../../parts/face';
import { palmRow } from '../../parts/palm';
import { prism } from '../../parts/prism';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { virginCrown, virginLED } from './signs';
import { TOWER, TOWER_H } from './tower';

/**
 * Virgin Hotels Las Vegas, the Hard Rock until 2020: the curved tower on
 * Paradise Road at Harmon with Branson's red signature on its face.
 */
function buildVirgin(k: Kit) {
  prism(k, TOWER, TOWER_H, '#e8e4de', { rough: 0.6, fx: FX.WINDOWS });
  k.sign(faceFrame(k, 3236, 682, 3245, 608, 3270, 650, 0.8).fr, 'virginCrown', 0, TOWER_H - 10, 0, 15, 1.4, FX.NEON);
  const kerb = k.frame(3192, 640, 0);
  pylon(k, kerb, 0, 0, { crown: 'virginCrown', screen: 'virginLED', h: 26, w: 15, color: '#2a0a0e', crownH: 3.2 });
  palmRow(k, k.frame(3190, 700, 270), -60, 0, 60, 0, 12, 12);
}

export const virgin: Resort = {
  id: 'virgin',
  name: 'Virgin Hotels Las Vegas',
  signs: [virginCrown, virginLED],
  build: buildVirgin,
  replaces: (m, x, z) => m.h > 150 && Math.hypot(x - 3226, z - 692) < 60,
};
