import type { Spot } from '../spot';
import { near } from '../tests';

export const virginSpot: Spot = {
  id: 'virgin',
  kind: 'lore',
  kicker: 'Virgin Hotels, once the Hard Rock · 1995',
  title: 'Rock and roll on Paradise Road',
  text: 'Peter Morton opened the Hard Rock in 1995 with guitars and stage costumes in every hall and a giant guitar out front, and its Rehab pool parties defined Las Vegas summers in the 2000s. Richard Branson’s Virgin Hotels reopened it in 2021.',
  at: { x: 3164, z: 650 },
  hint: 'Find the hotel on Paradise Road at Harmon.',
  r: 220,
  h: 90,
  test: near({ x: 3164, z: 650 }, 140, 90),
};
