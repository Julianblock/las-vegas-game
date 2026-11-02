import type { Brand } from '../brand';
import { panel } from '../panel';

/** Used books and zines. */
export const avantpop: Brand = {
  id: 'avantpop',
  match: /^Avantpop Bookstore$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_avantpop', {
    bg: '#ff5ad0',
    ink: '#1a1a1a',
    text: 'AVANTPOP',
    sub: 'BOOKS · ZINES',
    trim: '#ffd400',
  }),
};
