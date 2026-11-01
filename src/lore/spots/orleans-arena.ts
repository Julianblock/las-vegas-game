import type { Spot } from '../spot';
import { near } from '../tests';

export const orleansArenaSpot: Spot = {
  id: 'orleans-arena',
  kind: 'lore',
  kicker: 'Orleans Arena',
  title: 'Mardi Gras off Tropicana',
  text: 'A Louisiana-themed casino west of the freeway whose arena hosts college basketball, bull riding and the Las Vegas Desert Dogs lacrosse team.',
  at: { x: -1103, z: 1162 },
  hint: 'Fly west along Tropicana past the freeway.',
  r: 200,
  h: 50,
  test: near({ x: -1103, z: 1162 }, 160, 50),
};
