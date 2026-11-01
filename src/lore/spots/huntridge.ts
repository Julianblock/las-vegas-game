import type { Spot } from '../spot';
import { near } from '../tests';

export const huntridgeSpot: Spot = {
  id: 'huntridge',
  kind: 'lore',
  kicker: 'The Huntridge Theater · 1944',
  title: 'Loretta Young’s cinema',
  text: 'Built in 1944, part-owned by Hollywood stars Irene Dunne and Loretta Young, and one of the first theatres in town to let Black patrons sit anywhere. It became a rock venue in the 1990s.',
  at: { x: 4854, z: -4695 },
  hint: 'Fly east of downtown to Charleston and Maryland Parkway.',
  r: 160,
  h: 50,
  test: near({ x: 4854, z: -4695 }, 120, 50),
};
