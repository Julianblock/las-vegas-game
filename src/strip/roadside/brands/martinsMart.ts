import type { Brand } from '../brand';
import { panel } from '../panel';

/** The corner store. */
export const martinsMart: Brand = {
  id: 'martinsMart',
  match: /^Martin's Mart$/,
  pole: 'tall',
  color: '#1a1a1a',
  sign: panel('brand_martinsMart', {
    bg: '#c81a1a',
    ink: '#ffffff',
    text: 'Martin\'s Mart',
    sub: 'BEER · WINE · DELI',
    trim: '#ffffff',
  }),
};
