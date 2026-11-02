import type { Brand } from '../brand';
import { panel } from '../panel';

/** A museum of sex on Industrial Road. */
export const eroticMuseum: Brand = {
  id: 'eroticMuseum',
  match: /^Erotic Heritage Museum$/,
  pole: 'tall',
  color: '#1a0a1a',
  free: true,
  sign: panel('brand_eroticMuseum', {
    bg: '#1a0a1a',
    ink: '#ff3a8a',
    text: 'Erotic Heritage',
    sub: 'MUSEUM',
    trim: '#ff3a8a',
  }),
};
