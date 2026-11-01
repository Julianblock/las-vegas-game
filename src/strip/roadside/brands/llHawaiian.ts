import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** L&L Hawaiian Barbecue plate lunches. */
export const llHawaiian: Brand = {
  id: 'llHawaiian',
  match: /^L&L/,
  pole: 'tall',
  color: '#d0202a',
  sign: panel('brand_llHawaiian', {
    bg: '#d0202a',
    ink: '#ffffff',
    text: 'L&L',
    sub: 'HAWAIIAN BARBECUE',
    trim: '#ffd200',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
