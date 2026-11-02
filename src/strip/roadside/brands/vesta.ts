import type { Brand } from '../brand';
import { panel } from '../panel';

/** A roastery in the Arts District. */
export const vesta: Brand = {
  id: 'vesta',
  match: /^Vesta Coffee Roasters$/,
  pole: 'monument',
  color: '#2a1a1a',
  sign: panel('brand_vesta', {
    bg: '#f0e8dc',
    ink: '#3a2a1a',
    text: 'VESTA',
    sub: 'COFFEE ROASTERS',
    trim: '#3a2a1a',
  }),
};
