import type { Brand } from '../brand';
import { panel } from '../panel';

/** Horror toys and collectibles. */
export const hellbound: Brand = {
  id: 'hellbound',
  match: /^Hellbound Horror/,
  pole: 'monument',
  color: '#1a0a0a',
  sign: panel('brand_hellbound', {
    bg: '#1a0a0a',
    ink: '#e01a1a',
    text: 'HELLBOUND',
    sub: 'HORROR COLLECTIBLES',
    trim: '#e01a1a',
  }),
};
