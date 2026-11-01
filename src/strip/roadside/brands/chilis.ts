import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Chili’s Grill & Bar. */
export const chilis: Brand = {
  id: 'chilis',
  match: /^Chili's/,
  pole: 'tall',
  color: '#d0202a',
  sign: panel('brand_chilis', {
    bg: '#ffffff',
    ink: '#d0202a',
    text: "Chili's",
    sub: 'GRILL & BAR',
    trim: '#2a8a2a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
