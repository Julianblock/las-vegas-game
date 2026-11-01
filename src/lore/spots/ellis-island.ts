import type { Spot } from '../spot';
import { near } from '../tests';

export const ellisIslandSpot: Spot = {
  id: 'ellis-island',
  kind: 'lore',
  kicker: 'Ellis Island · Koval Lane',
  title: 'The steak that isn’t on the menu',
  text: 'A block off the Strip, this small casino brews its own beer, runs a karaoke bar where anyone can sing into the small hours, and serves a cheap steak dinner that only regulars know to ask for.',
  at: { x: 2384, z: 326 },
  hint: 'Drop down on Koval Lane, south of Flamingo.',
  r: 140,
  h: 50,
  test: near({ x: 2384, z: 326 }, 80, 50),
};
