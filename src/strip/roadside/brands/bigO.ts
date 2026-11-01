import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Big O Tires. */
export const bigO: Brand = {
  id: 'bigO',
  match: /^Big O Tires/,
  pole: 'tall',
  color: '#0a3a8a',
  sign: panel('brand_bigO', {
    bg: '#0a3a8a',
    ink: '#ffffff',
    text: 'BIG O TIRES',
    trim: '#e8702a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
