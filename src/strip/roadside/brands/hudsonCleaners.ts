import type { Brand } from '../brand';
import { panel } from '../panel';

/** A dry cleaner in the plaza. */
export const hudsonCleaners: Brand = {
  id: 'hudsonCleaners',
  match: /^Hudson Cleaners$/,
  pole: 'monument',
  color: '#1a2a5a',
  sign: panel('brand_hudsonCleaners', {
    bg: '#ffffff',
    ink: '#1a2a5a',
    text: 'HUDSON',
    sub: 'CLEANERS',
    trim: '#40a0e0',
  }),
};
