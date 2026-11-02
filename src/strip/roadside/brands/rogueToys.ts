import type { Brand } from '../brand';
import { panel } from '../panel';

/** Vintage toys and collectibles. */
export const rogueToys: Brand = {
  id: 'rogueToys',
  match: /^Rogue Toys$/,
  pole: 'monument',
  color: '#1a1a3a',
  sign: panel('brand_rogueToys', {
    bg: '#ffd400',
    ink: '#c81a1a',
    text: 'ROGUE TOYS',
    sub: 'VINTAGE · COLLECTIBLES',
    trim: '#1a3a8a',
  }),
};
