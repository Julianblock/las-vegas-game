import type { Brand } from '../brand';
import { panel } from '../panel';

/** Bail bonds by the courthouse. */
export const expressBail: Brand = {
  id: 'expressBail',
  match: /^Express Bail Bonds$/,
  pole: 'tall',
  color: '#1a1a3a',
  sign: panel('brand_expressBail', {
    bg: '#ffd400',
    ink: '#1a1a3a',
    text: 'BAIL BONDS',
    sub: '24 HOURS · EXPRESS',
    trim: '#c81a1a',
  }),
};
