import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Shake Shack. */
export const shakeShack: Brand = {
  id: 'shakeShack',
  match: /^Shake Shack$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_shakeShack', {
    bg: '#1a1a1a',
    ink: '#7ac04a',
    text: 'SHAKE SHACK',
    trim: '#7ac04a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
