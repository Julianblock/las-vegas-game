import type { Spot } from '../spot';
import { near } from '../tests';

export const atomicLiquorsSpot: Spot = {
  id: 'atomic-liquors',
  kind: 'lore',
  kicker: 'Atomic Liquors · 1952',
  title: 'Drinks on the roof',
  text: 'The oldest freestanding bar in town, on Fremont Street East. In the 1950s drinkers climbed to its roof to watch the mushroom clouds from the Nevada Test Site, and the bar named itself after them.',
  at: { x: 4870, z: -5780 },
  hint: 'Follow Fremont Street east, past Container Park.',
  r: 160,
  h: 50,
  test: near({ x: 4870, z: -5780 }, 120, 50),
};
