import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Fatburger, the last great hamburger stand. */
export const fatburger: Brand = {
  id: 'fatburger',
  match: /^Fatburger/,
  pole: 'tall',
  color: '#111111',
  sign: panel('brand_fatburger', {
    bg: '#111111',
    ink: '#ffffff',
    text: 'FATBURGER',
    sub: 'THE LAST GREAT HAMBURGER STAND',
    trim: '#e31837',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
