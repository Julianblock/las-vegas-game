import type { Brand } from '../brand';
import { panel } from '../panel';

/** Brewpub on the Arts District edge. */
export const lvBrewing: Brand = {
  id: 'lvBrewing',
  match: /^Las Vegas Brewing Company$/,
  pole: 'monument',
  color: '#3a2a1a',
  sign: panel('brand_lvBrewing', {
    bg: '#2a1a0a',
    ink: '#ffb040',
    text: 'LV Brewing Co.',
    sub: 'BREWPUB',
    trim: '#ffb040',
  }),
};
