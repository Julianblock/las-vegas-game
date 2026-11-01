import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Green Valley Grocery, the local chain of corner stores. */
export const greenValley: Brand = {
  id: 'greenValley',
  match: /^Green Valley Grocery$/,
  pole: 'tall',
  color: '#1a6a2a',
  sign: panel('brand_greenValley', {
    bg: '#1a6a2a',
    ink: '#ffffff',
    text: 'Green Valley',
    sub: 'GROCERY',
    trim: '#ffd200',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
