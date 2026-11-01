import type { Spot } from '../spot';
import { aloft } from '../tests';

export const fourCornersSpot: Spot = {
  id: 'four-corners',
  kind: 'lore',
  kicker: 'The Four Corners',
  title: 'Over the busiest corner',
  text: 'More people cross Flamingo and the Strip on foot than almost any corner in America, so the county lifted them above it: bridges, escalators and lifts tie Caesars, Bellagio, the Horseshoe and the Vanderpump together, and the traffic flows underneath.',
  at: { x: 1541, z: 146 },
  hint: 'Fly through the footbridges over Flamingo and the Strip, low.',
  r: 120,
  h: 30,
  test: aloft({ x: 1541, z: 146 }, 70, 3, 22),
};
