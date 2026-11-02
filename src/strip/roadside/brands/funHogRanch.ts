import { BLACK } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A biker dive with a pig on the sign. */
export const funHogRanch: Brand = {
  id: 'funHogRanch',
  match: /^Fun Hog Ranch$/,
  pole: 'tall',
  color: '#3a2a1a',
  free: true,
  sign: panel('brand_funHogRanch', {
    bg: '#f0a0b8',
    ink: '#2a1a1a',
    text: 'Fun Hog Ranch',
    sub: 'COLD BEER · POOL',
    trim: '#2a1a1a',
    font: (p) => `900 ${p}px ${BLACK}`,
  }),
};
