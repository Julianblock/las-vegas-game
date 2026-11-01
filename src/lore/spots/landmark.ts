import type { Spot } from '../spot';
import { near } from '../tests';

export const landmarkSpot: Spot = {
  id: 'landmark',
  kind: 'lore',
  kicker: 'The Landmark · 1969–1995',
  title: 'Blown up for the movies',
  text: 'Howard Hughes opened the Landmark’s mushroom-topped tower beside the convention centre in 1969. When it was imploded in 1995, the footage went into Tim Burton’s Mars Attacks!. The site is a convention centre car park now.',
  at: { x: 2930, z: -1826 },
  hint: 'Fly over the car parks just west of the convention centre.',
  r: 200,
  h: 80,
  test: near({ x: 2930, z: -1826 }, 140, 80),
};
