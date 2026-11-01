import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Dave’s Hot Chicken. */
export const daves: Brand = {
  id: 'daves',
  match: /^Dave's Hot Chicken$/,
  pole: 'tall',
  color: '#d0202a',
  sign: panel('brand_daves', {
    bg: '#111111',
    ink: '#ffd200',
    text: "DAVE'S",
    sub: 'HOT CHICKEN',
    trim: '#d0202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
