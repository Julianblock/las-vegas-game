import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Lotus of Siam, northern Thai on East Flamingo. */
export const lotusOfSiam: Brand = {
  id: 'lotusOfSiam',
  match: /^Lotus of Siam/,
  pole: 'monument',
  color: '#3a0a3a',
  sign: panel('brand_lotusOfSiam', {
    bg: '#3a0a3a',
    ink: '#f2d27a',
    text: 'Lotus of Siam',
    sub: 'THAI CUISINE',
    trim: '#f2d27a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
