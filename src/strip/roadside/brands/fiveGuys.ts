import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Five Guys burgers and fries. */
export const fiveGuys: Brand = {
  id: 'fiveGuys',
  match: /^Five Guys/,
  pole: 'monument',
  color: '#c8102e',
  sign: panel('brand_fiveGuys', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: 'FIVE GUYS',
    sub: 'BURGERS AND FRIES',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
