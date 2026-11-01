import type { Spot } from '../spot';
import { near } from '../tests';

export const caesarsGrandPrixSpot: Spot = {
  id: 'caesars-grand-prix',
  kind: 'lore',
  kicker: 'Caesars Palace Grand Prix · 1981',
  title: 'Formula 1 in a car park',
  text: 'In 1981 and 1982 Formula 1 raced around the Caesars Palace car park, on a flat, twisting track lined with concrete blocks. In the desert heat Nelson Piquet finished fifth, so exhausted he could barely climb from the car, and won his first world title by a single point.',
  at: { x: 1100, z: -120 },
  hint: 'Fly over the ground behind Caesars, toward the freeway.',
  r: 220,
  h: 80,
  test: near({ x: 1100, z: -120 }, 150, 80),
};
