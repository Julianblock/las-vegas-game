import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Papa Johns pizza. */
export const papaJohns: Brand = {
  id: 'papaJohns',
  match: /^Papa John/,
  pole: 'monument',
  color: '#0a6a3a',
  sign: panel('brand_papaJohns', {
    bg: '#ffffff',
    ink: '#c8102e',
    text: 'PAPA JOHNS',
    sub: 'PIZZA',
    trim: '#0a6a3a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
