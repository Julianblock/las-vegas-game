import type { Spot } from '../spot';
import { near } from '../tests';

export const luxorSpot: Spot = {
  id: 'luxor',
  kind: 'lore',
  kicker: 'Luxor · 1993',
  title: 'Inclinators and a beam for the stars',
  text: 'Thirty storeys of black glass around the largest atrium in the world. The lifts ride up the corners at 39 degrees, so the builders called them inclinators. At night 39 xenon lamps at the apex fire a single beam, the brightest light on Earth.',
  at: { x: 1260, z: 2278 },
  hint: 'Fly around the black pyramid at the south end of the Strip.',
  r: 300,
  h: 120,
  test: near({ x: 1260, z: 2278 }, 180, 140),
};
