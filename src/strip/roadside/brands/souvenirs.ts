import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Las Vegas Souvenirs, a souvenir warehouse on east Flamingo. */
export const souvenirs: Brand = {
  id: 'souvenirs',
  match: /^Las Vegas Souvenirs$/,
  pole: 'tall',
  color: '#c8202a',
  sign: panel('brand_souvenirs', {
    bg: '#ffd200',
    ink: '#c8202a',
    text: 'SOUVENIRS',
    sub: 'T-SHIRTS · GIFTS · CHEAP',
    trim: '#c8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
