import type { Brand } from '../brand';
import { panel } from '../panel';

/** Fresh Mexican grill. */
export const costaVida: Brand = {
  id: 'costaVida',
  match: /^Costa Vida$/,
  pole: 'monument',
  color: '#1a3a3a',
  sign: panel('brand_costaVida', {
    bg: '#f0e8d0',
    ink: '#1a7a7a',
    text: 'costa vida',
    sub: 'FRESH MEXICAN GRILL',
    trim: '#e05a1a',
  }),
};
