import type { Brand } from '../brand';
import { panel } from '../panel';

/** Sushi in the Arts District. */
export const yuOrMi: Brand = {
  id: 'yuOrMi',
  match: /^YU-OR-MI/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_yuOrMi', {
    bg: '#1a1a1a',
    ink: '#ff3a2a',
    text: 'YU-OR-MI',
    sub: 'SUSHI BAR',
    trim: '#ff3a2a',
  }),
};
