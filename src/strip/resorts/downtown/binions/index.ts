import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { clearOfMall } from '../fremont';
import { binionsName } from './signs';

/** Binion’s Horseshoe (1951), where Benny Binion took any bet and the World Series of Poker began in 1970. */
export const binions: Resort = {
  id: 'binions',
  name: 'Binion’s Gambling Hall',
  signs: [binionsName],
  build: (k) => {
    casinoBlock(k, {
      x: 4101, z: -6180, ang: -1.09, w: 83, d: 58,
      podium: 3, podiumColor: '#5a1a14',
  tower: { w: 42, d: 22, floors: 26, color: '#e2d6c4' },
      sign: 'binionsName', signH: 7,
    });
  },
};
