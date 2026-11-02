import type { Brand } from '../brand';
import { panel } from '../panel';

/** Korean comfort food by the counter. */
export const sistaKims: Brand = {
  id: 'sistaKims',
  match: /^Sista Kim's Kitchen$/,
  pole: 'monument',
  color: '#3a1a1a',
  free: true,
  sign: panel('brand_sistaKims', {
    bg: '#ffe8c8',
    ink: '#c81a1a',
    text: 'Sista Kim\'s',
    sub: 'KOREAN KITCHEN',
    trim: '#1a3a8a',
  }),
};
