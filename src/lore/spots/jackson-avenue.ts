import type { Spot } from '../spot';
import { near } from '../tests';

export const jacksonAvenueSpot: Spot = {
  id: 'jackson-avenue',
  kind: 'lore',
  kicker: 'Jackson Avenue · Historic Westside',
  title: 'The other Strip',
  text: 'Black performers who headlined the Strip in the 1940s and ’50s were not allowed to sleep in its hotels. They stayed in Westside boarding houses and came to Jackson Avenue after the show, where clubs like the Cotton Club ran until dawn.',
  at: { x: 3327, z: -7013 },
  hint: 'Find the old street of clubs in the Westside, west of the railroad.',
  r: 150,
  h: 50,
  test: near({ x: 3327, z: -7013 }, 110, 50),
};
