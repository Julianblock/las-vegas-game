import type { Resort } from '../../resort';
import { buildArena } from './arena';
import { buildPark } from './park';
import { arenaScreen, tmobileSign } from './signs';

export const arena: Resort = {
  id: 'arena',
  name: 'T-Mobile Arena and The Park',
  signs: [tmobileSign, arenaScreen],
  build(k) {
    buildArena(k);
    buildPark(k);
  },
};
