import type { Brand } from '../brand';
import { panel } from '../panel';

/** A Latino grocery with a carnicería at the back. */
export const laFavorita: Brand = {
  id: 'laFavorita',
  match: /^La Favorita Market$/,
  pole: 'tall',
  color: '#1a5a1a',
  free: true,
  sign: panel('brand_laFavorita', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'La Favorita',
    sub: 'MARKET · CARNICERÍA',
    trim: '#1a7a2a',
  }),
};
