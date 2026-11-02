import type { Spot } from '../spot';
import { near } from '../tests';

export const battistasSpot: Spot = {
  id: 'battistas',
  kind: 'lore',
  kicker: 'Battista’s Hole in the Wall · off Flamingo',
  title: 'Free wine and Gordo',
  text: 'Battista Locatelli opened his Hole in the Wall behind the Flamingo in 1970. Dinner came with all the house wine you could drink and an accordion player named Gordo at your table, under fifty years of signed celebrity photos and mounted animal heads.',
  at: { x: 1948, z: 65 },
  hint: 'Find the little Italian joint just east of the Strip on Flamingo.',
  r: 150,
  h: 50,
  test: near({ x: 1948, z: 65 }, 110, 50),
};
