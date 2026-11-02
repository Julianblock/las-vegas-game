import { BLACK } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Half-price show tickets, sold from a booth under a giant marquee. */
export const tix4tonight: Brand = {
  id: 'tix4tonight',
  match: /^Tix4Tonight/,
  pole: 'tall',
  color: '#1a1a1a',
  free: true,
  sign: panel('brand_tix4tonight', {
    bg: '#ffd400',
    ink: '#d01020',
    text: 'Tix4Tonight',
    sub: 'HALF PRICE SHOWS TODAY',
    trim: '#d01020',
    font: (p) => `900 ${p}px ${BLACK}`,
  }),
};
