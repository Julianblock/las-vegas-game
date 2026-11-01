import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Bahama Breeze island grille. */
export const bahamaBreeze: Brand = {
  id: 'bahamaBreeze',
  match: /^Bahama Breeze/,
  pole: 'monument',
  color: '#0a7a8a',
  sign: panel('brand_bahamaBreeze', {
    bg: '#0a7a8a',
    ink: '#ffffff',
    text: 'Bahama Breeze',
    sub: 'ISLAND GRILLE',
    trim: '#ffcc33',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
