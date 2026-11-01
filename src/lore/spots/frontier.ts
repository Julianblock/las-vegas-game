import type { Spot } from '../spot';
import { near } from '../tests';

export const frontierSpot: Spot = {
  id: 'frontier',
  kind: 'lore',
  kicker: 'The Frontier · 1942–2007',
  title: 'Where Elvis flopped',
  text: 'Elvis first played Las Vegas here at the New Frontier in April 1956 and bombed in front of a crowd who wanted Sinatra. From 1991 to 1998 its workers walked out in the longest strike in American history, six years, four months and ten days, and won. The hotel was imploded in 2007.',
  at: { x: 2000, z: -1620 },
  hint: 'Find the big empty lot across the Strip from Wynn.',
  r: 260,
  h: 90,
  test: near({ x: 2000, z: -1620 }, 180, 90),
};
