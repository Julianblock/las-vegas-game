import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A cantina named for El Chavo’s neighbourhood. */
export const vecindadChavo: Brand = {
  id: 'vecindadChavo',
  match: /^La Vecindad Del Chavo/,
  pole: 'monument',
  color: '#3a2a1a',
  sign: panel('brand_vecindadChavo', {
    bg: '#ffd400',
    ink: '#c81a1a',
    text: 'La Vecindad',
    sub: 'DEL CHAVO · CANTINA',
    trim: '#1a5aa0',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
