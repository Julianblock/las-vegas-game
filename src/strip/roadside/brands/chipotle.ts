import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The brown medallion brand. */
export const chipotle: Brand = {
  id: 'chipotle',
  match: /^Chipotle$/,
  pole: 'monument',
  color: '#451400',
  sign: panel('brand_chipotle', {
    bg: '#451400',
    ink: '#ffffff',
    text: 'CHIPOTLE',
    sub: 'MEXICAN GRILL',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
