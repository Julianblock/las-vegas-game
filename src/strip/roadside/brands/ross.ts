import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Ross Dress for Less. */
export const ross: Brand = {
  id: 'ross',
  match: /^Ross/,
  pole: 'tall',
  color: '#0a3a8a',
  sign: panel('brand_ross', {
    bg: '#ffffff',
    ink: '#0a3a8a',
    text: 'ROSS',
    sub: 'DRESS FOR LESS',
    trim: '#0a3a8a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
