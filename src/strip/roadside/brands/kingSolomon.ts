import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** King Solomon’s Treasures, a gold and pawn counter on Flamingo. */
export const kingSolomon: Brand = {
  id: 'kingSolomon',
  match: /^King Solomon/,
  pole: 'monument',
  color: '#3a2a0a',
  free: true,
  sign: panel('brand_kingSolomon', {
    bg: '#1a1a1a',
    ink: '#ffd040',
    text: 'KING SOLOMON’S',
    sub: 'TREASURES · GOLD · JEWELRY',
    trim: '#ffd040',
    font: (p) => `900 ${p}px ${SERIF}`,
  }),
};
