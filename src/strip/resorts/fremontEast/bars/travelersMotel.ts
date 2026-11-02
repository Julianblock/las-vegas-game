import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A motor court from the US-95 days. */
export const travelersMotel: Bar = {
  sign: neonPanel('fe_travelersMotel', {
    text: 'Travelers\'',
    color: '#ffd040',
    sub: 'MOTEL',
    subColor: '#40e0ff',
  }),
  s: 719,
  side: -1,
};
