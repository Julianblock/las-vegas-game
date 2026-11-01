import type { Spot } from '../spot';
import { near } from '../tests';

export const hofbrauhausSpot: Spot = {
  id: 'hofbrauhaus',
  kind: 'lore',
  kicker: 'Hofbräuhaus Las Vegas · 2004',
  title: 'Munich across from the Hard Rock',
  text: 'A copy of Munich’s 400-year-old beer hall, with beer brewed in Bavaria, oompah bands and long tables, opened on Paradise Road in 2004.',
  at: { x: 3467, z: 937 },
  hint: 'Look on Paradise Road at Harmon, across from Virgin.',
  r: 120,
  h: 50,
  test: near({ x: 3290, z: 820 }, 70, 50),
};
