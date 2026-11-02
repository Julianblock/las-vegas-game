import type { Brand } from '../brand';
import { panel } from '../panel';

/** Discount liquor near Paradise. */
export const liquorWorld: Brand = {
  id: 'liquorWorld',
  match: /^Liquor World$/,
  pole: 'tall',
  color: '#1a1a3a',
  free: true,
  sign: panel('brand_liquorWorld', {
    bg: '#1a3a8a',
    ink: '#ffffff',
    text: 'LIQUOR WORLD',
    sub: 'BEER · WINE · SPIRITS',
    trim: '#ffd400',
  }),
};
