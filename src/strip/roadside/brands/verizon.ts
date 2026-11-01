import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Verizon. */
export const verizon: Brand = {
  id: 'verizon',
  match: /^Verizon/,
  pole: 'monument',
  color: '#000000',
  sign: panel('brand_verizon', {
    bg: '#000000',
    ink: '#ffffff',
    text: 'verizon',
    trim: '#cd040b',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
