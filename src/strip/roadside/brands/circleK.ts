import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Red ring and orange band. */
export const circleK: Brand = {
  id: 'circleK',
  match: /^Circle K$/,
  pole: 'fuel',
  color: '#da291c',
  sign: panel('brand_circleK', {
    bg: '#da291c',
    ink: '#ffffff',
    text: 'CIRCLE K',
    trim: '#f58220',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
