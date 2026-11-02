import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Fried chicken and cocktails. */
export const chow: Bar = {
  sign: neonPanel('fe_chow', {
    text: 'CHOW',
    color: '#ffd040',
    sub: 'FRIED CHICKEN',
  }),
  s: 621,
  side: -1,
};
