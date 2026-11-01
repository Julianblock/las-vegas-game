import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Giordano’s Chicago deep dish. */
export const giordanos: Brand = {
  id: 'giordanos',
  match: /^Giordano's/,
  pole: 'monument',
  color: '#0a3a1a',
  sign: panel('brand_giordanos', {
    bg: '#0a3a1a',
    ink: '#ffffff',
    text: "GIORDANO'S",
    sub: 'FAMOUS STUFFED PIZZA',
    trim: '#c8102e',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
