import type { Spot } from '../spot';
import { near } from '../tests';

export const highRollerSpot: Spot = {
  id: 'high-roller',
  kind: 'lore',
  kicker: 'The High Roller · 2014',
  title: '550 feet on the LINQ',
  text: 'For seven years this was the tallest observation wheel in the world, until Ain Dubai. A ride takes thirty minutes. The LINQ promenade beneath it was cut through the old Imperial Palace, whose parking garage once held a museum of classic cars.',
  at: { x: 1966, z: -171 },
  hint: 'Circle the giant wheel behind the LINQ.',
  r: 260,
  h: 120,
  test: near({ x: 1966, z: -171 }, 120, 200),
};
