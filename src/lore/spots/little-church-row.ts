import type { Spot } from '../spot';
import { near } from '../tests';

export const littleChurchRowSpot: Spot = {
  id: 'little-church-row',
  kind: 'lore',
  kicker: 'Wedding row · Las Vegas Boulevard',
  title: 'Marry in a minute',
  text: 'Nevada never required blood tests or a waiting period, so the boulevard between the Strip and downtown filled with chapels. The Clark County marriage bureau stays open until midnight every day, and about 80,000 couples a year get married in Las Vegas.',
  at: { x: 3700, z: -4200 },
  hint: 'Drive the boulevard north of Sahara and count the chapels.',
  r: 240,
  h: 50,
  test: near({ x: 3700, z: -4200 }, 200, 50),
};
