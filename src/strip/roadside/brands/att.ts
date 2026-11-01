import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** AT&T. */
export const att: Brand = {
  id: 'att',
  match: /^AT&T$/,
  pole: 'monument',
  color: '#0a8ad8',
  sign: panel('brand_att', {
    bg: '#ffffff',
    ink: '#0a8ad8',
    text: 'AT&T',
    trim: '#0a8ad8',
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
