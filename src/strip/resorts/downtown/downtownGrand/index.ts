import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { downtownGrandName } from './signs';

/** Downtown Grand (2013), once Lady Luck, on 3rd Street. */
export const downtownGrand: Resort = {
  id: 'downtownGrand',
  name: 'Downtown Grand',
  signs: [downtownGrandName],
  build: (k) => {
    casinoBlock(k, {
      x: 4395, z: -6203, ang: 2.06, w: 122, d: 90,
      podium: 3, podiumColor: '#4a3a2a',
  tower: { w: 56, d: 22, floors: 25, color: '#ddd2c0' },
      sign: 'downtownGrandName', signH: 5,
    });
  },
};
