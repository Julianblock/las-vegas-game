import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Coffee Bean & Tea Leaf. */
export const coffeeBean: Brand = {
  id: 'coffeeBean',
  match: /^The Coffee Bean/,
  pole: 'monument',
  color: '#4a1a5a',
  sign: panel('brand_coffeeBean', {
    bg: '#4a1a5a',
    ink: '#ffffff',
    text: 'The Coffee Bean',
    sub: '& TEA LEAF',
    trim: '#c8a0d8',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
