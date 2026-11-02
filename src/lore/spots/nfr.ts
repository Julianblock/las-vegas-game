import type { Spot } from '../spot';
import { near } from '../tests';

export const nfrSpot: Spot = {
  id: 'nfr',
  kind: 'lore',
  kicker: 'Thomas & Mack Center · UNLV',
  title: 'Ten nights of rodeo',
  text: 'The National Finals Rodeo left Oklahoma City for Las Vegas in 1985 and has filled the Thomas & Mack for ten nights every December since. For those two weeks the town goes Western: Cowboy Christmas fills the convention centre, and there’s line dancing in every casino.',
  at: { x: 4260, z: 1480 },
  hint: 'Find the arena on the southwest corner of the UNLV campus.',
  r: 180,
  h: 50,
  test: near({ x: 4260, z: 1480 }, 140, 50),
};
