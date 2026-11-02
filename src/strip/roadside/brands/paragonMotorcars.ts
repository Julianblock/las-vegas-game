import type { Brand } from '../brand';
import { panel } from '../panel';

/** A classic car dealer. */
export const paragonMotorcars: Brand = {
  id: 'paragonMotorcars',
  match: /^Paragon Motorcars$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_paragonMotorcars', {
    bg: '#1a1a1a',
    ink: '#c8c8d0',
    text: 'PARAGON',
    sub: 'MOTORCARS',
    trim: '#c8a040',
  }),
};
