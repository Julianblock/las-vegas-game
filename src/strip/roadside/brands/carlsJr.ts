import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The smiling star's yellow. */
export const carlsJr: Brand = {
  id: 'carlsJr',
  match: /^Carl's Jr\.$/,
  pole: 'tall',
  color: '#ffc72c',
  sign: panel('brand_carlsJr', {
    bg: '#ffc72c',
    ink: '#e2231a',
    text: "Carl's Jr.",
    trim: '#e2231a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
