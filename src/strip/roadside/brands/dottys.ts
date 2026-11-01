import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Dotty’s, the Nevada chain of neighbourhood slot taverns. */
export const dottys: Brand = {
  id: 'dottys',
  match: /^Dotty's/,
  pole: 'monument',
  color: '#5a1a4a',
  sign: panel('brand_dottys', {
    bg: '#5a1a4a',
    ink: '#ffd27a',
    text: "Dotty's",
    sub: 'GAMING & SPIRITS',
    trim: '#ffd27a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
