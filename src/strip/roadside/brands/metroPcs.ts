import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Metro by T-Mobile. */
export const metroPcs: Brand = {
  id: 'metroPcs',
  match: /^Metro by T-Mobile/,
  pole: 'monument',
  color: '#46196e',
  sign: panel('brand_metroPcs', {
    bg: '#46196e',
    ink: '#ffffff',
    text: 'metro',
    sub: 'by T-Mobile',
    trim: '#e20074',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
