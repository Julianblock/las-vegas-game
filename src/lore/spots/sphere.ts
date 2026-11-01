import type { Spot } from '../spot';
import { near } from '../tests';

export const sphereSpot: Spot = {
  id: 'sphere',
  kind: 'lore',
  kicker: 'Sphere · 2023',
  title: 'The biggest screen on Earth',
  text: 'U2 opened it in September 2023. The outside is 580,000 square feet of LED pucks, about 1.2 million of them, wrapped round a ball 366 feet tall. On some nights it is an eyeball looking back at the Strip.',
  at: { x: 2514, z: -580 },
  hint: 'Fly around the giant ball behind the Venetian.',
  r: 280,
  h: 120,
  test: near({ x: 2514, z: -580 }, 150, 160),
};
