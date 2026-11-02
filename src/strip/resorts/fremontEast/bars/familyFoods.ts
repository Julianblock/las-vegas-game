import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** The corner grocery near 11th. */
export const familyFoods: Bar = {
  sign: neonPanel('fe_familyFoods', {
    text: 'Family Foods',
    color: '#ff3a2a',
    sub: 'MARKET',
  }),
  s: 712,
  side: 1,
};
