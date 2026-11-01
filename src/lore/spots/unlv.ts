import type { Spot } from '../spot';
import { near } from '../tests';

export const unlvSpot: Spot = {
  id: 'unlv',
  kind: 'lore',
  kicker: 'UNLV · 1990',
  title: 'Tark the Shark',
  text: 'Jerry Tarkanian’s Runnin’ Rebels chewed through college basketball with their coach gnawing a wet towel on the bench, and in 1990 beat Duke 103–73 for the national title, still the biggest margin in a championship game.',
  at: { x: 4606, z: 1188 },
  hint: 'Head east to the campus off Maryland Parkway.',
  r: 300,
  h: 90,
  test: near({ x: 4606, z: 1188 }, 220, 90),
};
