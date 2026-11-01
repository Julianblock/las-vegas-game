import type { Spot } from '../spot';
import { near } from '../tests';

export const paradiseSpot: Spot = {
  id: 'paradise',
  kind: 'lore',
  kicker: 'Sahara Avenue · the city line',
  title: 'The Strip isn’t in Las Vegas',
  text: 'South of Sahara Avenue you leave the City of Las Vegas. In 1950 the resort owners, keen to avoid city taxes, got the county to create the unincorporated town of Paradise, and almost all of the Strip still sits there.',
  at: { x: 3000, z: -3400 },
  hint: 'Cross Sahara Avenue on the Strip.',
  r: 220,
  h: 90,
  test: near({ x: 3000, z: -3400 }, 160, 90),
};
