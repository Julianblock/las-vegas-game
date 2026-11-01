import type { Spot } from '../spot';
import { near } from '../tests';

export const nynySpot: Spot = {
  id: 'nyny',
  kind: 'lore',
  kicker: 'New York-New York · 1997',
  title: 'A skyline in miniature',
  text: 'Twelve towers drawn from Manhattan, a half-size Brooklyn Bridge and a roller coaster looping round the lot. After 11 September 2001 people left T-shirts, flags and notes at the foot of its Statue of Liberty, and some were kept in a memorial.',
  at: { x: 1478, z: 1590 },
  hint: 'Fly low over the Brooklyn Bridge on the Strip.',
  r: 260,
  h: 90,
  test: near({ x: 1478, z: 1590 }, 140, 80),
};
