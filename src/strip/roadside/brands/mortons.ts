import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Morton’s The Steakhouse. */
export const mortons: Brand = {
  id: 'mortons',
  match: /^Morton's/,
  pole: 'monument',
  color: '#111111',
  sign: panel('brand_mortons', {
    bg: '#111111',
    ink: '#ffffff',
    text: "MORTON'S",
    sub: 'THE STEAKHOUSE',
    trim: '#c8a464',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
