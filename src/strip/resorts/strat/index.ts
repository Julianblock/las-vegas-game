import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { buildRides } from './rides';
import { stratCrown, stratLED } from './signs';
import { buildTower } from './tower';

/** The name on the hotel tower's Strip face and the marquee on Las Vegas Blvd. */
function buildSigns(k: Kit) {
  k.sign(k.frame(3127, -3520, 90), 'stratCrown', 0, 74, 0.6, 5, 1.35, FX.NEON);
  pylon(k, k.frame(3128, -3440, 90), 0, 0, { crown: 'stratCrown', screen: 'stratLED', h: 30, w: 16, color: '#1a2a5a', crownH: 3 });
}

export const strat: Resort = {
  id: 'strat',
  name: 'The Strat',
  signs: [stratCrown, stratLED],
  build(k) {
    buildTower(k);
    buildRides(k);
    buildSigns(k);
  },
};
