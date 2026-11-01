import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { elCortezHotelName } from './signs';

/** El Cortez (1941), the oldest casino still standing, on East Fremont. */
export const elCortezHotel: Resort = {
  id: 'elCortezHotel',
  name: 'El Cortez',
  signs: [elCortezHotelName],
  build: (k) => {
    casinoBlock(k, {
      x: 4588, z: -5894, ang: -1.09, w: 122, d: 50,
      podium: 2, podiumColor: '#8a5a3a',
  tower: { w: 50, d: 18, floors: 14, color: '#e8d8c0' },
      sign: 'elCortezHotelName', signH: 6,
    });
  },
};
