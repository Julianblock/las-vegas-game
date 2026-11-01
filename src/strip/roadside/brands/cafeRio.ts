import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Utah's Mexican grill, west Flamingo. */
export const cafeRio: Brand = {
  id: 'cafeRio',
  match: /^Cafe Rio$/,
  pole: 'monument',
  color: '#e04a1a',
  sign: panel('brand_cafeRio', {
    bg: '#e04a1a',
    ink: '#ffffff',
    text: 'CAFE RIO',
    sub: 'FRESH MEXICAN GRILL',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
