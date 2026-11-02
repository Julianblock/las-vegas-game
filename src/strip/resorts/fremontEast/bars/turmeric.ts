import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Indian food across from the El Cortez. */
export const turmeric: Bar = {
  sign: neonPanel('fe_turmeric', {
    text: 'Turmeric',
    color: '#ffb020',
    sub: 'INDIAN CUISINE',
  }),
  s: 192,
  side: -1,
};
