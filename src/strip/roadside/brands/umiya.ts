import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Umiya, a ramen and sushi bar in the Flamingo plazas. */
export const umiya: Brand = {
  id: 'umiya',
  match: /^Umiya$/,
  pole: 'monument',
  color: '#1a1a1a',
  free: true,
  sign: panel('brand_umiya', {
    bg: '#f4efe4',
    ink: '#1a1a1a',
    text: 'UMIYA',
    sub: 'RAMEN · SUSHI',
    trim: '#c8202a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
