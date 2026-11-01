import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Domino’s. */
export const dominos: Brand = {
  id: 'dominos',
  match: /^Domino's/,
  pole: 'monument',
  color: '#0a5aa8',
  sign: panel('brand_dominos', {
    bg: '#0a5aa8',
    ink: '#ffffff',
    text: "DOMINO'S",
    trim: '#e8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
