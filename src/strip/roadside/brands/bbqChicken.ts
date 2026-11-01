import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** bb.q Chicken, Korean fried chicken. */
export const bbqChicken: Brand = {
  id: 'bbqChicken',
  match: /^bb\.q/i,
  pole: 'monument',
  color: '#c8102e',
  sign: panel('brand_bbqChicken', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: 'bb.q CHICKEN',
    trim: '#ffd200',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
