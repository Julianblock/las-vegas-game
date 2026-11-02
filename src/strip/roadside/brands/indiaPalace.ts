import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Curry house near the convention centre. */
export const indiaPalace: Brand = {
  id: 'indiaPalace',
  match: /^India Palace$/,
  pole: 'monument',
  color: '#5a1a3a',
  free: true,
  sign: panel('brand_indiaPalace', {
    bg: '#f8e0a0',
    ink: '#8a1a3a',
    text: 'India Palace',
    sub: 'INDIAN CUISINE',
    trim: '#c88a1a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
