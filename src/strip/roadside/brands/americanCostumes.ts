import type { Brand } from '../brand';
import { panel } from '../panel';

/** Showgirl feathers and Elvis jumpsuits year round. */
export const americanCostumes: Brand = {
  id: 'americanCostumes',
  match: /^American Costumes$/,
  pole: 'tall',
  color: '#1a1a3a',
  free: true,
  sign: panel('brand_americanCostumes', {
    bg: '#c81a1a',
    ink: '#ffffff',
    text: 'American Costumes',
    sub: 'RENTALS · SALES',
    trim: '#1a3a8a',
  }),
};
