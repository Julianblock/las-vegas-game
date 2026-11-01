import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Piero’s Italian Cuisine. */
export const pieros: Brand = {
  id: 'pieros',
  match: /^Piero's/,
  pole: 'monument',
  color: '#3a0a0a',
  free: true,
  sign: panel('brand_pieros', {
    bg: '#3a0a0a',
    ink: '#f2e2c0',
    text: "PIERO'S",
    sub: 'ITALIAN CUISINE',
    trim: '#c8a464',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
