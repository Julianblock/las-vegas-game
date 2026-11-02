import type { Spot } from '../spot';
import { near } from '../tests';

export const fremontHotelSpot: Spot = {
  id: 'fremont-hotel',
  kind: 'lore',
  kicker: 'Fremont Hotel · Fremont Street',
  title: 'Fifteen floors over the desert',
  text: 'When the Fremont Hotel opened in 1956 it was the tallest building in Nevada. Wayne Newton got his start in its lounge as a teenager in 1959.',
  at: { x: 4232, z: -6122 },
  hint: 'Find the Fremont Hotel under the canopy.',
  r: 150,
  h: 50,
  test: near({ x: 4232, z: -6122 }, 110, 50),
};
