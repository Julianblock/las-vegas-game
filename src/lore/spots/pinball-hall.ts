import type { Spot } from '../spot';
import { near } from '../tests';

export const pinballHallSpot: Spot = {
  id: 'pinball-hall',
  kind: 'lore',
  kicker: 'Pinball Hall of Fame',
  title: 'Quarters only',
  text: 'Tim Arnold’s collection of hundreds of pinball and arcade machines, every one playable, run by a nonprofit that gives its takings to charity. It moved to the south Strip by the Welcome sign in 2021.',
  at: { x: 1727, z: 3461 },
  hint: 'Head south down the Strip toward the Welcome sign.',
  r: 160,
  h: 50,
  test: near({ x: 1727, z: 3461 }, 120, 50),
};
