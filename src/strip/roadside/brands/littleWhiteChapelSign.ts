import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Drive-up weddings under the tunnel of love. */
export const littleWhiteChapelSign: Brand = {
  id: 'littleWhiteChapelSign',
  match: /^Little White Chapel$/,
  pole: 'tall',
  color: '#c8c8d0',
  sign: panel('brand_littleWhiteChapelSign', {
    bg: '#ffffff',
    ink: '#c81a5a',
    text: 'A Little White',
    sub: 'WEDDING CHAPEL',
    trim: '#c81a5a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
