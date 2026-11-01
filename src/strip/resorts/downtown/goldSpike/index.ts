import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { goldSpikeName } from './signs';

/** The Gold Spike (1970s), the penny-slot joint on Ogden that became a backyard bar. */
export const goldSpike: Resort = {
  id: 'goldSpike',
  name: 'Gold Spike',
  signs: [goldSpikeName],
  build: (k) => {
    casinoBlock(k, {
      x: 4445, z: -6099, ang: 0.483, w: 43.3, d: 31.8,
      podium: 2, podiumColor: '#3a2414',
      sign: 'goldSpikeName', signH: 4,
    });
  },
};
