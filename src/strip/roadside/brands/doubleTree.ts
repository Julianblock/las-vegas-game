import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** DoubleTree by Hilton. */
export const doubleTree: Brand = {
  id: 'doubleTree',
  match: /^DoubleTree/,
  pole: 'monument',
  color: '#0a2a5a',
  sign: panel('brand_doubleTree', {
    bg: '#0a2a5a',
    ink: '#ffffff',
    text: 'DOUBLETREE',
    sub: 'BY HILTON',
    trim: '#5a9ad0',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
