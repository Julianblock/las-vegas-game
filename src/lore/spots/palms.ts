import type { Spot } from '../spot';
import { near } from '../tests';

export const palmsSpot: Spot = {
  id: 'palms',
  kind: 'lore',
  kicker: 'Palms · 2001',
  title: 'The Real World, the Ghostbar, the tribe',
  text: 'George Maloof opened the Palms in 2001 and made it the celebrity hangout off the Strip: MTV filmed The Real World here, and the Ghostbar on the 55th floor looked straight down Flamingo. In 2021 the San Manuel Band of Mission Indians bought it, the first tribe to own and run a Las Vegas resort.',
  at: { x: -430, z: 120 },
  hint: 'Fly between the Palms towers west of the freeway.',
  r: 320,
  h: 120,
  test: near({ x: -430, z: 120 }, 220, 120),
};
