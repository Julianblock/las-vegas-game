import type { Spot } from '../spot';
import { near } from '../tests';

export const allegiantSpot: Spot = {
  id: 'allegiant',
  kind: 'lore',
  kicker: 'Allegiant Stadium · 2020',
  title: 'The Death Star',
  text: 'The Raiders left Oakland for this black glass dome west of I-15. Locals call it the Death Star. A torch 85 feet tall in the end zone burns for Al Davis, and in 2024 the stadium hosted the Super Bowl.',
  at: { x: 520, z: 2830 },
  hint: 'Fly over the black dome west of the freeway at the south end of the Strip.',
  r: 380,
  h: 140,
  test: near({ x: 520, z: 2830 }, 220, 140),
};
