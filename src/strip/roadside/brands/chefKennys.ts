import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Chef Kenny’s Vegan Dim Sum. */
export const chefKennys: Brand = {
  id: 'chefKennys',
  match: /^Chef Kenny/,
  pole: 'monument',
  color: '#2a6a2a',
  free: true,
  sign: panel('brand_chefKennys', {
    bg: '#2a6a2a',
    ink: '#ffffff',
    text: "CHEF KENNY'S",
    sub: 'VEGAN DIM SUM',
    trim: '#ffcc33',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
