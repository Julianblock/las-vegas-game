import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A 1950s motor court off the street. */
export const cityCenterMotel: Bar = {
  sign: neonPanel('fe_cityCenterMotel', {
    text: 'City Center',
    color: '#40e0ff',
    sub: 'MOTEL · VACANCY',
    subColor: '#ff3a2a',
  }),
  s: 258,
  side: -1,
};
