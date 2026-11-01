import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Travelodge. */
export const travelodge: Brand = {
  id: 'travelodge',
  match: /^Travelodge/,
  pole: 'tall',
  color: '#0a3a8a',
  sign: panel('brand_travelodge', {
    bg: '#0a3a8a',
    ink: '#ffffff',
    text: 'Travelodge',
    sub: 'BY WYNDHAM',
    trim: '#ffcc33',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
