import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { clearOfMall } from '../fremont';
import { fourQueensName } from './signs';

/** The Four Queens (1966), named for the owner’s four daughters. */
export const fourQueens: Resort = {
  id: 'fourQueens',
  name: 'Four Queens',
  signs: [fourQueensName],
  build: (k) => {
    casinoBlock(k, clearOfMall({
      x: 4158, z: -5990, ang: -2.65, w: 92, d: 77,
      podium: 3, podiumColor: '#3a0a10',
  tower: { w: 50, d: 22, floors: 19, color: '#e6dccb' },
      sign: 'fourQueensName', signH: 6,
    }));
  },
};
