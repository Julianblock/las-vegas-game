import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Western boots by the yard on East Flamingo. */
export const cowtownBoots: Brand = {
  id: 'cowtownBoots',
  match: /^Cowtown Boots$/,
  pole: 'tall',
  color: '#3a1a0a',
  sign: panel('brand_cowtownBoots', {
    bg: '#f0d8a0',
    ink: '#5a2a0a',
    text: 'COWTOWN',
    sub: 'BOOTS',
    trim: '#a0601a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
