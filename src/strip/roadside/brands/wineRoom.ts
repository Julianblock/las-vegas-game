import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A small wine bar. */
export const wineRoom: Brand = {
  id: 'wineRoom',
  match: /^Wine Room$/,
  pole: 'monument',
  color: '#3a0a1a',
  sign: panel('brand_wineRoom', {
    bg: '#3a0a1a',
    ink: '#f0d8c0',
    text: 'Wine Room',
    sub: 'BAR',
    trim: '#c8a060',
    font: (p) => `italic bold ${p}px ${SERIF}`,
  }),
};
