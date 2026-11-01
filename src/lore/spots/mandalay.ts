import type { Spot } from '../spot';
import { near } from '../tests';

export const mandalaySpot: Spot = {
  id: 'mandalay',
  kind: 'lore',
  kicker: 'Mandalay Bay · 1999',
  title: 'The Hacienda goes out with a bang',
  text: 'At midnight on New Year’s Eve 1996 the Hacienda was imploded live on television to make room for Mandalay Bay. The gold Y opened in 1999 with a wave pool, a beach of real sand and the Shark Reef aquarium.',
  at: { x: 1367, z: 2650 },
  hint: 'Circle the gold tower at the south end of the Strip.',
  r: 340,
  h: 140,
  test: near({ x: 1367, z: 2650 }, 200, 160),
};
