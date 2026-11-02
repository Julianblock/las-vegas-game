import type { Spot } from '../spot';
import { near } from '../tests';

export const handOfFaithSpot: Spot = {
  id: 'hand-of-faith',
  kind: 'lore',
  kicker: 'Golden Nugget · Fremont Street',
  title: 'The Hand of Faith',
  text: 'In 1980 a prospector in Victoria, Australia swept a metal detector over a field and found a 61-pound gold nugget shaped like a cupped hand, the largest ever found with a detector. The Golden Nugget bought it, and it sits in a case off the lobby.',
  at: { x: 4014, z: -5997 },
  hint: 'Find the Golden Nugget on Fremont Street.',
  r: 150,
  h: 50,
  test: near({ x: 4014, z: -5997 }, 110, 50),
};
