import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Chicken and waffles, Phoenix-style. */
export const loLos: Brand = {
  id: 'loLos',
  match: /^Lo-Lo's Chicken/,
  pole: 'tall',
  color: '#1a1a1a',
  sign: panel('brand_loLos', {
    bg: '#ffd400',
    ink: '#c81a1a',
    text: 'Lo-Lo\'s',
    sub: 'CHICKEN & WAFFLES',
    trim: '#c81a1a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
