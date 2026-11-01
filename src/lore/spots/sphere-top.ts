import type { Spot } from '../spot';
import { aloft } from '../tests';

export const sphereTopSpot: Spot = {
  id: 'sphere-top',
  kind: 'secret',
  kicker: 'Sphere',
  title: 'Perched on the pixels',
  text: 'You landed on top of the largest spherical building in the world. Somewhere below, the screen thinks you are a very small bird.',
  at: { x: 2514, z: -580 },
  hint: 'Settle on the very top of Sphere.',
  r: 120,
  h: 40,
  test: aloft({ x: 2514, z: -580 }, 30, 108, 125),
};
