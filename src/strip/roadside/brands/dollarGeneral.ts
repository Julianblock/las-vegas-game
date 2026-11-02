import type { Brand } from '../brand';
import { panel } from '../panel';

/** Yellow and black discount store. */
export const dollarGeneral: Brand = {
  id: 'dollarGeneral',
  match: /^Dollar General/,
  pole: 'tall',
  color: '#1a1a1a',
  free: true,
  sign: panel('brand_dollarGeneral', {
    bg: '#ffd400',
    ink: '#1a1a1a',
    text: 'DOLLAR GENERAL',
    sub: 'MARKET',
  }),
};
