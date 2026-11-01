import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** IHOP, pancakes all night. */
export const ihop: Brand = {
  id: 'ihop',
  match: /^IHOP/,
  pole: 'tall',
  color: '#0a5ab0',
  sign: panel('brand_ihop', {
    bg: '#0a5ab0',
    ink: '#ffffff',
    text: 'IHOP',
    trim: '#e8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
