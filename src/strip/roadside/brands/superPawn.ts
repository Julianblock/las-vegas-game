import type { Brand } from '../brand';
import { panel } from '../panel';

/** Gold and guitars behind the glass. */
export const superPawn: Brand = {
  id: 'superPawn',
  match: /^Super Pawn/,
  pole: 'tall',
  color: '#1a1a5a',
  sign: panel('brand_superPawn', {
    bg: '#ffd400',
    ink: '#1a1a5a',
    text: 'SUPER PAWN',
    sub: 'JEWELRY · LOANS',
    trim: '#c81a1a',
  }),
};
