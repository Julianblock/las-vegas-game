import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Buffalo Wild Wings. */
export const buffaloWildWings: Brand = {
  id: 'buffaloWildWings',
  match: /^Buffalo Wild Wings/,
  pole: 'tall',
  color: '#111111',
  sign: panel('brand_buffaloWildWings', {
    bg: '#ffc600',
    ink: '#111111',
    text: 'BUFFALO WILD WINGS',
    sub: 'BEER · WINGS · SPORTS',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
