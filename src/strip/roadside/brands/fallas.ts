import type { Brand } from '../brand';
import { panel } from '../panel';

/** Discount clothing in the old anchor store. */
export const fallas: Brand = {
  id: 'fallas',
  match: /^Fallas Stores$/,
  pole: 'tall',
  color: '#1a1a5a',
  sign: panel('brand_fallas', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'fallas',
    sub: 'DISCOUNT STORES',
    trim: '#1a1a8a',
  }),
};
