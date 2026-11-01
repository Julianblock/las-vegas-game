import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Nevada's own chain of gas stations. */
export const rebel: Brand = {
  id: 'rebel',
  match: /^Rebel$/,
  pole: 'fuel',
  color: '#d01a20',
  sign: panel('brand_rebel', {
    bg: '#111111',
    ink: '#d01a20',
    text: 'REBEL',
    trim: '#ffffff',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
