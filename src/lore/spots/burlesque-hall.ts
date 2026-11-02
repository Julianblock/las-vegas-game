import type { Spot } from '../spot';
import { near } from '../tests';

export const burlesqueHallSpot: Spot = {
  id: 'burlesque-hall',
  kind: 'lore',
  kicker: 'Burlesque Hall of Fame · Main Street',
  title: 'Feathers and fans',
  text: 'The Burlesque Hall of Fame began as Exotic World, a goat ranch in the Mojave run by retired dancer Dixie Evans. It moved to Las Vegas in 2006 with its costumes, fans and Jayne Mansfield’s heart-shaped sofa, and every June it hosts the Legends Weekend.',
  at: { x: 3345, z: -4896 },
  hint: 'Look along Main Street in the Arts District.',
  r: 150,
  h: 50,
  test: near({ x: 3345, z: -4896 }, 110, 50),
};
