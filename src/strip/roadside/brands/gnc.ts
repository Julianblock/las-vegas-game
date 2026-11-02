import type { Brand } from '../brand';
import { panel } from '../panel';

/** Protein tubs and vitamins. */
export const gnc: Brand = {
  id: 'gnc',
  match: /^GNC$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_gnc', {
    bg: '#e01a1a',
    ink: '#ffffff',
    text: 'GNC',
    sub: 'LIVE WELL',
    trim: '#ffffff',
  }),
};
