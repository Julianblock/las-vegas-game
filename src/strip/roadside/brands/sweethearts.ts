import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Wedding chapel and bridal boutique behind the Oasis Motel. */
export const sweethearts: Brand = {
  id: 'sweethearts',
  match: /^Oasis Motel;Sweethearts/,
  pole: 'tall',
  color: '#5a1a3a',
  free: true,
  sign: panel('brand_sweethearts', {
    bg: '#ffe0ec',
    ink: '#c81a5a',
    text: 'Sweethearts',
    sub: 'WEDDING CHAPEL',
    trim: '#c81a5a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
