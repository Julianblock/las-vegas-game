import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Walmart Supercenter. */
export const walmart: Brand = {
  id: 'walmart',
  match: /^Walmart/,
  pole: 'tall',
  color: '#0071ce',
  sign: panel('brand_walmart', {
    bg: '#0071ce',
    ink: '#ffffff',
    text: 'Walmart',
    sub: 'SUPERCENTER',
    trim: '#ffc220',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
