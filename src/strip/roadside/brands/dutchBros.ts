import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Dutch Bros drive-through coffee. */
export const dutchBros: Brand = {
  id: 'dutchBros',
  match: /^Dutch Bros/,
  pole: 'tall',
  color: '#0a4a8a',
  sign: panel('brand_dutchBros', {
    bg: '#0a4a8a',
    ink: '#ffffff',
    text: 'DUTCH BROS',
    sub: 'COFFEE',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
