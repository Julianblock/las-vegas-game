import type { Spot } from '../spot';
import { near } from '../tests';

export const arizonaCharliesSpot: Spot = {
  id: 'arizona-charlies',
  kind: 'lore',
  kicker: 'Arizona Charlie’s · Decatur Boulevard',
  title: 'Named for a showman',
  text: 'The Becker family opened Arizona Charlie’s on Decatur in 1988 and named it after a relative, Charlie Meadows, a cowboy showman who toured the world with his Wild West act.',
  at: { x: -1567, z: -5259 },
  hint: 'Find the locals’ casino on Decatur Boulevard.',
  r: 150,
  h: 50,
  test: near({ x: -1567, z: -5259 }, 110, 50),
};
