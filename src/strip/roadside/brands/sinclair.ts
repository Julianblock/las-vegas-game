import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The green dinosaur's stations. */
export const sinclair: Brand = {
  id: 'sinclair',
  match: /^Sinclair$/,
  pole: 'fuel',
  color: '#00843d',
  sign: panel('brand_sinclair', {
    bg: '#00843d',
    ink: '#ffffff',
    text: 'SINCLAIR',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
