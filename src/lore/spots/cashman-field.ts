import type { Spot } from '../spot';
import { near } from '../tests';

export const cashmanFieldSpot: Spot = {
  id: 'cashman-field',
  kind: 'lore',
  kicker: 'Cashman Field · 1983',
  title: 'Thirty-five summers of baseball',
  text: 'Minor-league baseball played here from 1983: the Las Vegas Stars, then the 51s, named for Area 51. In 2019 the team became the Aviators and moved to a new park in Summerlin, and soccer took over the field.',
  at: { x: 4990, z: -7514 },
  hint: 'Find the old ballpark north of downtown, beside the Mormon Fort.',
  r: 180,
  h: 50,
  test: near({ x: 4990, z: -7514 }, 140, 50),
};
