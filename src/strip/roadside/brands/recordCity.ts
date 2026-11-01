import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Record City. */
export const recordCity: Brand = {
  id: 'recordCity',
  match: /^Record City/,
  pole: 'tall',
  color: '#111111',
  free: true,
  sign: panel('brand_recordCity', {
    bg: '#ffcc33',
    ink: '#111111',
    text: 'RECORD CITY',
    sub: 'BUY · SELL · TRADE',
    trim: '#e8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
