import type { Resort } from '../../../resort';
import { casinoBlock } from '../../../parts/casinoBlock';
import { plazaName } from './signs';

/** The Plaza (1971), at the head of Fremont Street on the site of the old Union Pacific depot. */
export const plaza: Resort = {
  id: 'plaza',
  name: 'Plaza Hotel & Casino',
  signs: [plazaName],
  build: (k) => {
    casinoBlock(k, {
      x: 3888, z: -6176, ang: -1.08, w: 188, d: 89,
      podium: 3, podiumColor: '#d8d2c4',
  tower: { w: 110, d: 22, floors: 25, color: '#ece6d8' },
      sign: 'plazaName', signH: 9,
    });
  },
};
