import type { Spot } from '../spot';
import { near } from '../tests';

export const tmobileSpot: Spot = {
  id: 'tmobile',
  kind: 'lore',
  kicker: 'T-Mobile Arena · 2016',
  title: 'Vegas Born',
  text: 'The Golden Knights, the first major-league team in town, played here in 2017 and reached the Stanley Cup Final in their first season, a sports first. In 2023 they won it all.',
  at: { x: 1043, z: 1458 },
  hint: 'Fly over the arena behind Park MGM and New York-New York.',
  r: 240,
  h: 80,
  test: near({ x: 1043, z: 1458 }, 120, 80),
};
