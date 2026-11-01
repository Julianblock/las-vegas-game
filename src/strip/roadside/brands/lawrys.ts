import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Lawry’s The Prime Rib, carved tableside on East Flamingo. */
export const lawrys: Brand = {
  id: 'lawrys',
  match: /^Lawry's/,
  pole: 'monument',
  color: '#5a1a1a',
  sign: panel('brand_lawrys', {
    bg: '#5a1a1a',
    ink: '#f2e2c0',
    text: "LAWRY'S",
    sub: 'THE PRIME RIB',
    trim: '#c8a464',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
