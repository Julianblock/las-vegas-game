import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { clearOfMall } from '../fremont';
import { fremontHotelName } from './signs';

/** The Fremont (1956), downtown’s first high-rise, its neon wall a Fremont Street landmark. */
export const fremontHotel: Resort = {
  id: 'fremontHotel',
  name: 'Fremont Hotel & Casino',
  signs: [fremontHotelName],
  build: (k) => {
    casinoBlock(k, {
      x: 4232, z: -6122, ang: -1.08, w: 122, d: 95,
      podium: 3, podiumColor: '#a0301a',
  tower: { w: 60, d: 22, floors: 14, color: '#efe4d0' },
      sign: 'fremontHotelName', signH: 7,
    });
  },
};
