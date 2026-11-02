import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A vintage shop. */
export const cheapThrillz: Bar = {
  sign: neonPanel('fe_cheapThrillz', {
    text: 'Cheap Thrillz',
    color: '#ff8ac8',
    sub: 'VINTAGE',
  }),
  s: 721,
  side: 1,
};
