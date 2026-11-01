import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Halal Guys. */
export const halalGuys: Brand = {
  id: 'halalGuys',
  match: /^The Halal Guys$/,
  pole: 'monument',
  color: '#ffd200',
  sign: panel('brand_halalGuys', {
    bg: '#ffd200',
    ink: '#c8202a',
    text: 'THE HALAL GUYS',
    trim: '#c8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
