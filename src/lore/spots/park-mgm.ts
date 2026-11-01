import type { Spot } from '../spot';
import { near } from '../tests';

export const parkMgmSpot: Spot = {
  id: 'park-mgm',
  kind: 'lore',
  kicker: 'Park MGM, once Monte Carlo · 1996',
  title: 'Arches and chandeliers',
  text: 'Built as the Monte Carlo with a grand Beaux-Arts arch on the Strip, it was gutted and reborn as Park MGM in 2018, the first smoke-free casino resort on the Strip.',
  at: { x: 1300, z: 1253 },
  hint: 'Fly past the tower between Aria and New York-New York.',
  r: 240,
  h: 90,
  test: near({ x: 1300, z: 1253 }, 130, 90),
};
