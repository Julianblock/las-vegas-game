import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { addZone } from '../../massStyles';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { excaliburCrown, excaliburLED } from './signs';
import { buildTurrets } from './turrets';

/** Crowns on the two towers' Strip-facing ends, and the marquee at the Tropicana corner. */
function buildSigns(k: Kit) {
  for (const [x, z] of [[1324, 1859], [1409, 1938]] as const) k.sign(k.frame(x, z, 90), 'excaliburCrown', 0, 60, 0.6, 5, 1.35, FX.NEON);
  pylon(k, k.frame(1502, 1720, 90), 0, 0, { crown: 'excaliburCrown', screen: 'excaliburLED', h: 30, w: 16, color: '#7a1a1a', crownH: 3 });
}

export const excalibur: Resort = {
  id: 'excalibur',
  name: 'Excalibur',
  signs: [excaliburCrown, excaliburLED],
  style() {
    addZone(36.0991, -115.1752, 130, { color: '#f0ece2', rough: 0.8, fx: FX.WINDOWS, wash: 1, seed: -0.05, glowRgb: [1, 0.85, 0.6] }, 25);
  },
  build(k) {
    buildTurrets(k);
    buildSigns(k);
  },
};
