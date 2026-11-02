import type { Brand } from '../brand';
import { panel } from '../panel';

/** A dealership out on West Sahara. */
export const infiniti: Brand = {
  id: 'infiniti',
  match: /^Infiniti/,
  pole: 'monument',
  color: '#2a2a2a',
  free: true,
  sign: panel('brand_infiniti', {
    bg: '#1a1a1a',
    ink: '#e8e8e8',
    text: 'INFINITI',
    sub: 'OF LAS VEGAS',
  }),
};
