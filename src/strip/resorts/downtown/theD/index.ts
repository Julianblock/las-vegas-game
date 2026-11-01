import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { clearOfMall } from '../fremont';
import { theDName } from './signs';

/** The D (2012), once Fitzgeralds, with the Long Bar and a vintage casino upstairs. */
export const theD: Resort = {
  id: 'theD',
  name: 'The D Las Vegas',
  signs: [theDName],
  build: (k) => {
    casinoBlock(k, clearOfMall({
      x: 4260, z: -5945, ang: -2.67, w: 94, d: 109,
      podium: 3, podiumColor: '#1a1a1e',
  tower: { w: 46, d: 26, floors: 34, color: '#c8c8cc' },
      sign: 'theDName', signH: 10,
    }));
  },
};
