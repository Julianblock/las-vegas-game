import type { Spot } from '../spot';
import { near } from '../tests';

export const decaturSpot: Spot = {
  id: 'decatur',
  kind: 'lore',
  kicker: 'Flamingo Road & Decatur Boulevard',
  title: 'A city laid out by the mile',
  text: 'The valley’s big roads run on the old federal survey lines, one mile apart: Decatur, then Valley View, then the Strip a mile beyond. From this corner the casinos are a straight 5 km drive east, and the grid of stucco and red tile runs west to the mountains.',
  at: { x: -1627, z: 59 },
  hint: 'Find the corner of Flamingo and Decatur, west of the casinos.',
  r: 260,
  h: 90,
  test: near({ x: -1627, z: 59 }, 160, 80),
};
