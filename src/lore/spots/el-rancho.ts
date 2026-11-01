import type { Spot } from '../spot';
import { near } from '../tests';

export const elRanchoSpot: Spot = {
  id: 'el-rancho',
  kind: 'lore',
  kicker: 'El Rancho Vegas · 1941',
  title: 'The first resort on the highway',
  text: 'Thomas Hull opened El Rancho Vegas in April 1941 on the Los Angeles Highway, just outside the city limits and its taxes: a western motel with a casino, a pool by the road and a windmill lit in neon. Everything since grew from here. Fire destroyed it in 1960.',
  at: { x: 2730, z: -2900 },
  hint: 'Fly over the open ground on the west side of the Strip, opposite the Sahara.',
  r: 260,
  h: 90,
  test: near({ x: 2730, z: -2900 }, 170, 90),
};
