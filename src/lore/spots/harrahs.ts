import type { Spot } from '../spot';
import { near } from '../tests';

export const harrahsSpot: Spot = {
  id: 'harrahs',
  kind: 'lore',
  kicker: 'Harrah’s, once the Holiday Casino · 1973',
  title: 'A riverboat on the Strip',
  text: 'The Holiday Casino looked like a Mississippi paddle-steamer moored on the Strip, smokestacks and all. Harrah’s bought it and swapped the boat for carnival colours and a jester.',
  at: { x: 1600, z: -380 },
  hint: 'Fly past the carnival facade between the LINQ and the Venetian.',
  r: 200,
  h: 80,
  test: near({ x: 1600, z: -380 }, 100, 80),
};
