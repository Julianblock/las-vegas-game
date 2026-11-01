import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { californiaHotelName } from './signs';

/** The California (1975), Sam Boyd’s hotel for Hawaii, the ninth island. */
export const californiaHotel: Resort = {
  id: 'californiaHotel',
  name: 'California Hotel & Casino',
  signs: [californiaHotelName],
  build: (k) => {
    casinoBlock(k, {
      x: 4073, z: -6343, ang: 2.06, w: 121, d: 93,
      podium: 3, podiumColor: '#c8b89a',
  tower: { w: 60, d: 22, floors: 12, color: '#efe6d4' },
      sign: 'californiaHotelName', signH: 6,
    });
  },
};
