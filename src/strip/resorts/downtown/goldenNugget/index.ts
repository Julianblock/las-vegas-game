import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { goldenNuggetName } from './signs';

/** The Golden Nugget (1946), white and gold, where Steve Wynn started. */
export const goldenNugget: Resort = {
  id: 'goldenNugget',
  name: 'Golden Nugget',
  signs: [goldenNuggetName],
  build: (k) => {
    casinoBlock(k, {
      x: 4014, z: -5997, ang: -2.65, w: 161, d: 265,
      podium: 3, podiumColor: '#efe6cc',
  tower: { w: 90, d: 24, floors: 24, color: '#f4efe2' },
      sign: 'goldenNuggetName', signH: 8,
    });
  },
};
