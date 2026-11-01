import type { Spot } from '../spot';
import { near } from '../tests';

export const excaliburSpot: Spot = {
  id: 'excalibur',
  kind: 'lore',
  kicker: 'Excalibur · 1990',
  title: 'The biggest hotel in the world',
  text: 'Circus Circus Enterprises built a fairy-tale castle with 4,032 rooms, then the largest hotel on the planet, and staged a jousting dinner show beneath it. Its red, blue and gold turrets still greet drivers coming off Tropicana.',
  at: { x: 1380, z: 1890 },
  hint: 'Fly between the castle turrets at Tropicana and the Strip.',
  r: 240,
  h: 90,
  test: near({ x: 1380, z: 1890 }, 140, 90),
};
