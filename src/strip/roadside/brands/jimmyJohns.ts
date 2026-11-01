import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Jimmy John’s. */
export const jimmyJohns: Brand = {
  id: 'jimmyJohns',
  match: /^Jimmy John/,
  pole: 'monument',
  color: '#111111',
  sign: panel('brand_jimmyJohns', {
    bg: '#ffffff',
    ink: '#111111',
    text: "JIMMY JOHN'S",
    sub: 'FREAKY FAST',
    trim: '#c8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
