import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Cash America Pawn. */
export const cashAmerica: Brand = {
  id: 'cashAmerica',
  match: /^Cash America/,
  pole: 'tall',
  color: '#0a6a3a',
  sign: panel('brand_cashAmerica', {
    bg: '#ffcc33',
    ink: '#0a6a3a',
    text: 'CASH AMERICA',
    sub: 'PAWN',
    trim: '#0a6a3a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
