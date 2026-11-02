import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A cocktail lounge with live bands on weekends. */
export const vanguard: Bar = {
  sign: neonPanel('fe_vanguard', {
    text: 'VANGUARD',
    color: '#40e0ff',
    sub: 'LOUNGE',
  }),
  s: 70,
  side: -1,
};
