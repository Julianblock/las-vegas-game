import type { Resort } from '../../resort';
import { casinoBlock } from '../../parts/casinoBlock';
import { arizonaCharliesName } from './signs';

/** Arizona Charlie’s (1988), the locals casino on Decatur Boulevard, named for a Klondike sharpshooter. */
export const arizonaCharlies: Resort = {
  id: 'arizonaCharlies',
  name: 'Arizona Charlie’s Decatur',
  signs: [arizonaCharliesName],
  build: (k) => {
    casinoBlock(k, {
      x: -1567, z: -5259, ang: 3.121, w: 99.7, d: 108.6,
      podium: 2, podiumColor: '#b8743a',
  tower: { w: 64, d: 18, floors: 7, color: '#e6d2b0' },
      sign: 'arizonaCharliesName', signH: 4,
    });
  },
};
