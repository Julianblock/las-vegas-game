import type { Brand } from '../brand';
import { panel } from '../panel';

/** Latin coffee and brunch. */
export const makersFinders: Brand = {
  id: 'makersFinders',
  match: /^Makers & Finders$/,
  pole: 'monument',
  color: '#2a1a1a',
  sign: panel('brand_makersFinders', {
    bg: '#f0e8dc',
    ink: '#2a1a1a',
    text: 'Makers & Finders',
    sub: 'COFFEE · KITCHEN',
    trim: '#2a1a1a',
  }),
};
