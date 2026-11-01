import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Seafood City, the Filipino supermarket. */
export const seafoodCity: Brand = {
  id: 'seafoodCity',
  match: /^Seafood City/,
  pole: 'tall',
  color: '#0a4a9a',
  sign: panel('brand_seafoodCity', {
    bg: '#0a4a9a',
    ink: '#ffffff',
    text: 'SEAFOOD CITY',
    sub: 'SUPERMARKET',
    trim: '#ffcc33',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
