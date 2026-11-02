import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A star-topped sign on the old motel row. */
export const desertStar: Brand = {
  id: 'desertStar',
  match: /^Desert Star Motel$/,
  pole: 'tall',
  color: '#1a3a5a',
  sign: panel('brand_desertStar', {
    bg: '#1a2a5a',
    ink: '#ffd400',
    text: 'Desert Star',
    sub: 'MOTEL',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
