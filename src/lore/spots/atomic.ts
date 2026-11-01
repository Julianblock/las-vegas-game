import type { Spot } from '../spot';
import { near } from '../tests';

export const atomicSpot: Spot = {
  id: 'atomic',
  kind: 'lore',
  kicker: 'Atomic Museum · East Flamingo Road',
  title: 'Mushroom clouds at breakfast',
  text: 'From 1951 the Nevada Test Site, 65 miles northwest, set off bombs above the desert. Hotels threw dawn atomic parties so guests could watch the flash from their rooftops, and the Sands crowned a Miss Atomic Bomb. The museum on East Flamingo tells the story.',
  at: { x: 3740, z: 178 },
  hint: 'Fly east along Flamingo Road, past Paradise Road.',
  r: 160,
  h: 60,
  test: near({ x: 3740, z: 178 }, 100, 60),
};
