import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Brew Tea Bar, the boba shop with a queue out the door. */
export const brewTea: Brand = {
  id: 'brewTea',
  match: /^Brew Tea Bar$/,
  pole: 'monument',
  color: '#2a1a3a',
  free: true,
  sign: panel('brand_brewTea', {
    bg: '#f2e8d8',
    ink: '#3a2a5a',
    text: 'BREW TEA BAR',
    sub: 'BOBA · TEA',
    trim: '#3a2a5a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
