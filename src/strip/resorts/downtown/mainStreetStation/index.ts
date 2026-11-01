import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { mainStreetStationName } from './signs';

/** Main Street Station (1991), Victorian railroad theme, with a slab of the Berlin Wall in the men’s room. */
export const mainStreetStation: Resort = {
  id: 'mainStreetStation',
  name: 'Main Street Station',
  signs: [mainStreetStationName],
  build: (k) => {
    casinoBlock(k, {
      x: 4012, z: -6458, ang: 2.06, w: 124, d: 95,
      podium: 3, podiumColor: '#5a2a1a',
  tower: { w: 60, d: 22, floors: 17, color: '#e6d6c0' },
      sign: 'mainStreetStationName', signH: 5,
    });
  },
};
