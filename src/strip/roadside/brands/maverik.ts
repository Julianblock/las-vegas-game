import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Maverik, the Utah chain of mountain-themed gas stations. */
export const maverik: Brand = {
  id: 'maverik',
  match: /^Maverik/,
  pole: 'fuel',
  color: '#d0202a',
  sign: panel('brand_maverik', {
    bg: '#d0202a',
    ink: '#ffffff',
    text: 'MAVERIK',
    sub: "ADVENTURE'S FIRST STOP",
    trim: '#ffffff',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
