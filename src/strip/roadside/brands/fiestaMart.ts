import type { Brand } from '../brand';
import { panel } from '../panel';

/** Neighbourhood Mexican market on Maryland Parkway. */
export const fiestaMart: Brand = {
  id: 'fiestaMart',
  match: /^Fiesta Mart$/,
  pole: 'tall',
  color: '#1a4a1a',
  free: true,
  sign: panel('brand_fiestaMart', {
    bg: '#f8e040',
    ink: '#c81a1a',
    text: 'Fiesta Mart',
    sub: 'CARNICERÍA · PANADERÍA',
    trim: '#1a7a2a',
  }),
};
