import type { Spot } from '../spot';
import { near } from '../tests';

export const binionsSpot: Spot = {
  id: 'binions',
  kind: 'lore',
  kicker: 'Binion’s · 1951',
  title: 'The World Series of Poker',
  text: 'Benny Binion, a Texas gambler with a murder rap, opened the Horseshoe on Fremont in 1951 with the highest limits in town. He started the World Series of Poker here in 1970, and once showed off a horseshoe holding a million dollars in $10,000 bills.',
  at: { x: 4117, z: -6179 },
  hint: 'Under the Fremont Street canopy.',
  r: 160,
  h: 50,
  test: near({ x: 4117, z: -6179 }, 120, 50),
};
