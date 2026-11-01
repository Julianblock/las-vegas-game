import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Buca di Beppo family-style Italian. */
export const bucaDiBeppo: Brand = {
  id: 'bucaDiBeppo',
  match: /^Buca di Beppo/,
  pole: 'monument',
  color: '#2a5a2a',
  sign: panel('brand_bucaDiBeppo', {
    bg: '#f2e2c0',
    ink: '#c8102e',
    text: 'Buca di Beppo',
    sub: 'ITALIAN',
    trim: '#2a5a2a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
