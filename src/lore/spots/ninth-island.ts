import type { Spot } from '../spot';
import { near } from '../tests';

export const ninthIslandSpot: Spot = {
  id: 'ninth-island',
  kind: 'lore',
  kicker: 'California Hotel · Ogden Avenue',
  title: 'The Ninth Island',
  text: 'Sam Boyd marketed the California to Hawaii from 1975, with charter flights, oxtail soup and Hawaiian specials on the menu. Islanders still fill it, and Hawaii calls Las Vegas its Ninth Island.',
  at: { x: 4073, z: -6343 },
  hint: 'Go to the California, a block north of Fremont Street.',
  r: 150,
  h: 50,
  test: near({ x: 4073, z: -6343 }, 110, 50),
};
