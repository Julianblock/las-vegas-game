import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Pool tables and a live music room. */
export const backstageBilliards: Bar = {
  sign: neonPanel('fe_backstageBilliards', {
    text: 'Backstage',
    color: '#ff3a2a',
    sub: 'BAR & BILLIARDS',
    subColor: '#ffd040',
  }),
  s: 137,
  side: 1,
};
