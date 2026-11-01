import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Dee Frisco’s, the steakhouse at the Hughes Center. */
export const deeFriscos: Brand = {
  id: 'deeFriscos',
  match: /^Dee Frisco/,
  pole: 'monument',
  color: '#1a1a1a',
  free: true,
  sign: panel('brand_deeFriscos', {
    bg: '#1a1a1a',
    ink: '#c8a464',
    text: "DEE FRISCO'S",
    sub: 'STEAKHOUSE',
    trim: '#c8a464',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
