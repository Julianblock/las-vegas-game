import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A neon horseshoe over the courtyard. */
export const luckyMotel: Bar = {
  sign: neonPanel('fe_luckyMotel', {
    text: 'Lucky Motel',
    color: '#7aff5a',
    sub: 'DAILY · WEEKLY',
  }),
  s: 766,
  side: -1,
};
