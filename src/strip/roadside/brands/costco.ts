import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Costco Wholesale. */
export const costco: Brand = {
  id: 'costco',
  match: /^Costco/,
  pole: 'tall',
  color: '#e31837',
  sign: panel('brand_costco', {
    bg: '#ffffff',
    ink: '#e31837',
    text: 'COSTCO',
    sub: 'WHOLESALE',
    trim: '#005daa',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
