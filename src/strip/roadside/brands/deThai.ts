import type { Brand } from '../brand';
import { panel } from '../panel';

/** Thai kitchen on Charleston. */
export const deThai: Brand = {
  id: 'deThai',
  match: /^D E Thai Kitchen$/,
  pole: 'monument',
  color: '#3a1a1a',
  sign: panel('brand_deThai', {
    bg: '#ffd400',
    ink: '#a01a1a',
    text: 'D E Thai',
    sub: 'KITCHEN',
    trim: '#a01a1a',
  }),
};
