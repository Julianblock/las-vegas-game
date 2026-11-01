import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Amigo Tires on West Flamingo. */
export const amigoTires: Brand = {
  id: 'amigoTires',
  match: /^Amigo Tires/,
  pole: 'tall',
  color: '#0a3a8a',
  free: true,
  sign: panel('brand_amigoTires', {
    bg: '#ffcc33',
    ink: '#0a3a8a',
    text: 'AMIGO TIRES',
    sub: 'LLANTAS · ALIGNMENT',
    trim: '#0a3a8a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
