import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Max’s Restaurant, Filipino fried chicken. */
export const maxs: Brand = {
  id: 'maxs',
  match: /^Max's Restaurant/,
  pole: 'monument',
  color: '#c8102e',
  sign: panel('brand_maxs', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: "MAX'S",
    sub: 'THE HOUSE THAT FRIED CHICKEN BUILT',
    trim: '#ffcc33',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
