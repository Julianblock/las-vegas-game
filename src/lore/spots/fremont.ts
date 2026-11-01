import type { Spot } from '../spot';
import { near } from '../tests';

export const fremontSpot: Spot = {
  id: 'fremont',
  kind: 'lore',
  kicker: 'Fremont Street · 1905',
  title: 'Glitter Gulch',
  text: 'Las Vegas began here in 1905, with lots auctioned beside the railroad. Fremont Street got the first paved road, the first telephone and the first gaming licence, and the neon of Glitter Gulch. Since 1995 a vaulted LED canopy has covered five blocks.',
  at: { x: 4154, z: -6089 },
  hint: 'Follow Las Vegas Boulevard north to the old downtown.',
  r: 240,
  h: 90,
  test: near({ x: 4154, z: -6089 }, 170, 90),
};
