import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Panera Bread. */
export const panera: Brand = {
  id: 'panera',
  match: /^Panera/,
  pole: 'monument',
  color: '#576630',
  sign: panel('brand_panera', {
    bg: '#576630',
    ink: '#ffffff',
    text: 'Panera',
    sub: 'BREAD',
    trim: '#f2c46a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
