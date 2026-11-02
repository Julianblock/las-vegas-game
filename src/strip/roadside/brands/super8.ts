import type { Brand } from '../brand';
import { panel } from '../panel';

/** Budget chain motel by the Gateway. */
export const super8: Brand = {
  id: 'super8',
  match: /^Super 8/,
  pole: 'tall',
  color: '#5a1a1a',
  sign: panel('brand_super8', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'SUPER 8',
    sub: 'BY WYNDHAM',
    trim: '#ffd400',
  }),
};
