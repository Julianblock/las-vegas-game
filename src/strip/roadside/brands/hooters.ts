import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Hooters. */
export const hooters: Brand = {
  id: 'hooters',
  match: /^Hooters/,
  pole: 'tall',
  color: '#ff6b00',
  sign: panel('brand_hooters', {
    bg: '#ff6b00',
    ink: '#ffffff',
    text: 'HOOTERS',
    trim: '#5a2a0a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
