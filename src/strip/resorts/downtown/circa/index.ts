import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { clearOfMall } from '../fremont';
import { circaName } from './signs';

/** Circa (2020), the tallest tower downtown, with Vegas Vickie kicking her leg inside and a stadium-sized sportsbook. */
export const circa: Resort = {
  id: 'circa',
  name: 'Circa Resort & Casino',
  signs: [circaName],
  build: (k) => {
    casinoBlock(k, {
      x: 3990, z: -6206, ang: -1.09, w: 120, d: 94,
      podium: 4, podiumColor: '#2a2a2e',
  tower: { w: 62, d: 28, floors: 35, color: '#d9d9dc' },
      sign: 'circaName', signH: 10,
    });
  },
};
