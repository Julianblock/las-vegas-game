import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Purple bell, pink trim. */
export const tacoBell: Brand = {
  id: 'tacoBell',
  match: /^Taco Bell$/,
  pole: 'tall',
  color: '#702082',
  sign: panel('brand_tacoBell', {
    bg: '#702082',
    ink: '#ffffff',
    text: 'TACO BELL',
    trim: '#ec008c',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
