import type { Spot } from '../spot';
import { near } from '../tests';

export const fourQueensSpot: Spot = {
  id: 'four-queens',
  kind: 'lore',
  kicker: 'Four Queens · Fremont Street',
  title: 'Named for four daughters',
  text: 'Ben Goffstein opened the Four Queens in 1966 and named it for his four daughters. Its red neon crowns have hung over Fremont Street ever since.',
  at: { x: 4158, z: -5990 },
  hint: 'Find the Four Queens on Fremont Street.',
  r: 150,
  h: 50,
  test: near({ x: 4158, z: -5990 }, 110, 50),
};
