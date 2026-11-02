import type { Brand } from '../brand';
import { panel } from '../panel';

/** An Asian supermarket anchoring the plaza. */
export const sfSupermarket: Brand = {
  id: 'sfSupermarket',
  match: /^SF Supermarket$/,
  pole: 'tall',
  color: '#1a3a1a',
  sign: panel('brand_sfSupermarket', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'SF SUPERMARKET',
    sub: 'ASIAN GROCERY · SEAFOOD',
    trim: '#1a7a2a',
  }),
};
