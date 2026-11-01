import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Happy Lemon tea. */
export const happyLemon: Brand = {
  id: 'happyLemon',
  match: /^Happy Lemon/,
  pole: 'monument',
  color: '#ffd200',
  sign: panel('brand_happyLemon', {
    bg: '#ffd200',
    ink: '#1a3a8a',
    text: 'Happy Lemon',
    trim: '#1a3a8a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
