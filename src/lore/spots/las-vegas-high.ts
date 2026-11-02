import type { Spot } from '../spot';
import { near } from '../tests';

export const lasVegasHighSpot: Spot = {
  id: 'las-vegas-high',
  kind: 'lore',
  kicker: 'Las Vegas High School · East 7th Street',
  title: 'Art Deco with Maya faces',
  text: 'The old Las Vegas High School opened in 1931, the year Nevada legalised gambling. Its facade mixes Art Deco with Mayan Revival carving. Today it’s the Las Vegas Academy of the Arts, and the neighbourhood around it is a historic district.',
  at: { x: 4546, z: -5356 },
  hint: 'Go to the old high school east of downtown.',
  r: 150,
  h: 50,
  test: near({ x: 4546, z: -5356 }, 110, 50),
};
