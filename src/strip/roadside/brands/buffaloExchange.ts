import type { Brand } from '../brand';
import { panel } from '../panel';

/** Buy, sell and trade clothing. */
export const buffaloExchange: Brand = {
  id: 'buffaloExchange',
  match: /^Buffalo Exchange$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_buffaloExchange', {
    bg: '#ffffff',
    ink: '#1a1a1a',
    text: 'Buffalo Exchange',
    sub: 'NEW & RECYCLED FASHION',
    trim: '#c81a1a',
  }),
};
