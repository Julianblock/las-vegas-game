import type { Brand } from '../brand';
import { panel } from '../panel';

/** One of the oldest gay bars in town. */
export const flexLounge: Brand = {
  id: 'flexLounge',
  match: /^Flex Cocktail Lounge$/,
  pole: 'monument',
  color: '#1a1a2a',
  free: true,
  sign: panel('brand_flexLounge', {
    bg: '#2a1a4a',
    ink: '#ff5ad0',
    text: 'FLEX',
    sub: 'COCKTAIL LOUNGE',
    trim: '#40e0ff',
  }),
};
