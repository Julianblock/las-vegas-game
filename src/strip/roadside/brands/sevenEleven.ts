import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** White cabinet, red-orange-green stripes, open all night. */
export const sevenEleven: Brand = {
  id: 'sevenEleven',
  match: /^7-Eleven$/,
  pole: 'tall',
  color: '#ffffff',
  sign: panel('brand_sevenEleven', {
    bg: '#ffffff',
    ink: '#ee2722',
    text: '7-ELEVEN',
    trim: '#008163',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
