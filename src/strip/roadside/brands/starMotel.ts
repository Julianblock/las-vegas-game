import type { Brand } from '../brand';
import { panel } from '../panel';

/** A neon star over the office. */
export const starMotel: Brand = {
  id: 'starMotel',
  match: /^Star Motel$/,
  pole: 'tall',
  color: '#1a1a3a',
  sign: panel('brand_starMotel', {
    bg: '#1a1a4a',
    ink: '#ff5a3a',
    text: 'STAR',
    sub: 'MOTEL · TV · POOL',
    trim: '#ffd400',
  }),
};
