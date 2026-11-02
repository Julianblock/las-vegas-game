import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Pizza by the slice on the corner. */
export const uncleJoes: Bar = {
  sign: neonPanel('fe_uncleJoes', {
    text: 'Uncle Joe\'s',
    color: '#ff3a2a',
    sub: 'PIZZA BY THE SLICE',
    subColor: '#ffd040',
  }),
  s: 28,
  side: 1,
};
