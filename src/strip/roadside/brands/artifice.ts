import type { Brand } from '../brand';
import { panel } from '../panel';

/** A bar and venue in the Arts District. */
export const artifice: Brand = {
  id: 'artifice',
  match: /^Artifice$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_artifice', {
    bg: '#1a1a1a',
    ink: '#ff5ad0',
    text: 'ARTIFICE',
    sub: 'BAR · ART · MUSIC',
    trim: '#ff5ad0',
  }),
};
