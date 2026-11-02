import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Walk-ins welcome. */
export const downtownTattoo: Bar = {
  sign: neonPanel('fe_downtownTattoo', {
    text: 'TATTOO',
    color: '#40e0ff',
    sub: 'DOWNTOWN · WALK-INS',
  }),
  s: 725,
  side: 1,
};
