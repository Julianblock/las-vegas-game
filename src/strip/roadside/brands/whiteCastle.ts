import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** White Castle, on the Strip since 2015. */
export const whiteCastle: Brand = {
  id: 'whiteCastle',
  match: /^White Castle/,
  pole: 'tall',
  color: '#0a3a8a',
  sign: panel('brand_whiteCastle', {
    bg: '#0a3a8a',
    ink: '#ffffff',
    text: 'WHITE CASTLE',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
