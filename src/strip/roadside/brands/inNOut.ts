import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The yellow-arrow sign; the Tropicana one fed every tourist off the Strip. */
export const inNOut: Brand = {
  id: 'inNOut',
  match: /^In-N-Out Burger$/,
  pole: 'tall',
  color: '#d01f2d',
  sign: panel('brand_inNOut', {
    bg: '#ffffff',
    ink: '#d01f2d',
    text: 'IN-N-OUT',
    sub: 'BURGER',
    trim: '#ffc72c',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
