import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Metro Pizza, a Las Vegas institution since 1980. */
export const metroPizza: Brand = {
  id: 'metroPizza',
  match: /^Metro Pizza$/,
  pole: 'monument',
  color: '#c8202a',
  sign: panel('brand_metroPizza', {
    bg: '#111111',
    ink: '#ffffff',
    text: 'METRO PIZZA',
    sub: 'SINCE 1980',
    trim: '#c8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
