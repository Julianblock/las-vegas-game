import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A Commercial Center jeweller since the early days. */
export const johnFish: Brand = {
  id: 'johnFish',
  match: /^John Fish Jewelers$/,
  pole: 'monument',
  color: '#1a1a3a',
  sign: panel('brand_johnFish', {
    bg: '#f0e8d0',
    ink: '#1a1a3a',
    text: 'John Fish',
    sub: 'JEWELERS',
    trim: '#c8a040',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
