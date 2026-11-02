import type { Brand } from '../brand';
import { panel } from '../panel';

/** Sinaloa sushi and aguachile. */
export const culichiTown: Brand = {
  id: 'culichiTown',
  match: /^Culichi Town$/,
  pole: 'monument',
  color: '#1a1a1a',
  free: true,
  sign: panel('brand_culichiTown', {
    bg: '#1a1a1a',
    ink: '#ff5a1a',
    text: 'Culichi Town',
    sub: 'SUSHI · MARISCOS',
    trim: '#ff5a1a',
  }),
};
