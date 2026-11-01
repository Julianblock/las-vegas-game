import { ROUND } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Cricket Wireless. */
export const cricket: Brand = {
  id: 'cricket',
  match: /^Cricket Wireless$/,
  pole: 'monument',
  color: '#2a8a3a',
  sign: panel('brand_cricket', {
    bg: '#ffffff',
    ink: '#2a8a3a',
    text: 'cricket',
    sub: 'WIRELESS',
    trim: '#2a8a3a',
    font: (p) => `900 ${p}px ${ROUND}`,
  }),
};
