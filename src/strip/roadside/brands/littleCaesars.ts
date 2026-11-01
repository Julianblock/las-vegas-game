import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Little Caesars. */
export const littleCaesars: Brand = {
  id: 'littleCaesars',
  match: /^Little Caesars/,
  pole: 'tall',
  color: '#f26a1b',
  sign: panel('brand_littleCaesars', {
    bg: '#f26a1b',
    ink: '#ffffff',
    text: 'Little Caesars',
    sub: 'PIZZA! PIZZA!',
    trim: '#111111',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
