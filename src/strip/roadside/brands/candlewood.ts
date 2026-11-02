import type { Brand } from '../brand';
import { panel } from '../panel';

/** Extended stay by the airport. */
export const candlewood: Brand = {
  id: 'candlewood',
  match: /^Candlewood Suites/,
  pole: 'tall',
  color: '#2a3a1a',
  free: true,
  sign: panel('brand_candlewood', {
    bg: '#ffffff',
    ink: '#3a5a2a',
    text: 'Candlewood Suites',
    sub: 'AN IHG HOTEL',
    trim: '#3a5a2a',
  }),
};
