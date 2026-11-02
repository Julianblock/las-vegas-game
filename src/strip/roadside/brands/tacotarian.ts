import type { Brand } from '../brand';
import { panel } from '../panel';

/** Plant-based tacos. */
export const tacotarian: Brand = {
  id: 'tacotarian',
  match: /^Tacotarian$/,
  pole: 'monument',
  color: '#1a3a1a',
  sign: panel('brand_tacotarian', {
    bg: '#1a1a1a',
    ink: '#7aff5a',
    text: 'TACOTARIAN',
    sub: 'PLANT-BASED TACOS',
    trim: '#ff5aa8',
  }),
};
