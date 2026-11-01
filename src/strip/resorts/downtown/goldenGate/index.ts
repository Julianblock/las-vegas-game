import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { clearOfMall } from '../fremont';
import { goldenGateName } from './signs';

/** The Golden Gate (1906), the oldest hotel in town, once the Hotel Nevada, at Fremont and Main. */
export const goldenGate: Resort = {
  id: 'goldenGate',
  name: 'Golden Gate Hotel & Casino',
  signs: [goldenGateName],
  build: (k) => {
    casinoBlock(k, {
      x: 3935, z: -6121, ang: 2.089, w: 55.4, d: 43.7,
      podium: 4, podiumColor: '#efe9dc',
      sign: 'goldenGateName', signH: 5,
    });
  },
};
