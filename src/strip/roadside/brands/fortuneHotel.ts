import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A small hotel east of the Strip. */
export const fortuneHotel: Brand = {
  id: 'fortuneHotel',
  match: /^Fortune Hotel/,
  pole: 'tall',
  color: '#5a1a1a',
  free: true,
  sign: panel('brand_fortuneHotel', {
    bg: '#c81a1a',
    ink: '#ffd400',
    text: 'Fortune Hotel',
    sub: '& SUITES',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
