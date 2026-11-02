import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Pizza and Evel Knievel memorabilia, with his jump bike on the wall. */
export const evelPie: Bar = {
  sign: neonPanel('fe_evelPie', {
    text: 'EVEL PIE',
    color: '#ff3a2a',
    sub: 'PIZZA · BEER · DAREDEVILS',
    subColor: '#40a0ff',
  }),
  s: 41,
  side: -1,
};
