import type { Brand } from '../brand';
import { panel } from '../panel';

/** Corner market with lotto and cold drinks. */
export const vegasMarket: Brand = {
  id: 'vegasMarket',
  match: /^Vegas Market$/,
  pole: 'tall',
  color: '#2a2a2a',
  free: true,
  sign: panel('brand_vegasMarket', {
    bg: '#c81a1a',
    ink: '#ffffff',
    text: 'Vegas Market',
    sub: 'LIQUOR · LOTTO · ATM',
    trim: '#ffd400',
  }),
};
