import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Marigold Indian kitchen in the strip mall east of Decatur. */
export const marigold: Brand = {
  id: 'marigold',
  match: /^Marigold/,
  pole: 'monument',
  color: '#6a2a0a',
  free: true,
  sign: panel('brand_marigold', {
    bg: '#f2a01a',
    ink: '#5a1a0a',
    text: 'Marigold',
    sub: 'FINE INDIAN CUISINE',
    trim: '#5a1a0a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
