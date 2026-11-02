import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Late-night kebabs for the bar crowd. */
export const kabobKorner: Bar = {
  sign: neonPanel('fe_kabobKorner', {
    text: 'Kabob Korner',
    color: '#ffd040',
    sub: 'HALAL · OPEN LATE',
  }),
  s: 35,
  side: 1,
};
