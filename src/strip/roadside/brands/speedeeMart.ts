import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Speedee Mart, a Nevada convenience store. */
export const speedeeMart: Brand = {
  id: 'speedeeMart',
  match: /^Speedee Mart$/,
  pole: 'tall',
  color: '#d0202a',
  sign: panel('brand_speedeeMart', {
    bg: '#ffffff',
    ink: '#d0202a',
    text: 'SPEEDEE MART',
    trim: '#0a3a8a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
