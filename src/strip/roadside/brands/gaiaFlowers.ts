import type { Brand } from '../brand';
import { panel } from '../panel';

/** A florist on Charleston. */
export const gaiaFlowers: Brand = {
  id: 'gaiaFlowers',
  match: /^GAIA Flowers$/,
  pole: 'monument',
  color: '#1a3a1a',
  sign: panel('brand_gaiaFlowers', {
    bg: '#f0f8e8',
    ink: '#1a5a2a',
    text: 'GAIA',
    sub: 'FLOWERS',
    trim: '#ff5aa8',
  }),
};
