import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** dd’s Discounts. */
export const dds: Brand = {
  id: 'dds',
  match: /^dd's/i,
  pole: 'tall',
  color: '#e40046',
  sign: panel('brand_dds', {
    bg: '#e40046',
    ink: '#ffffff',
    text: "dd's",
    sub: 'DISCOUNTS',
    trim: '#ffffff',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
