import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tod Motor Motel, a 1940s court. */
export const todMotel: Brand = {
  id: 'todMotel',
  match: /^Tod Motor Motel$/,
  pole: 'tall',
  color: '#3a1a1a',
  sign: panel('brand_todMotel', {
    bg: '#ffd400',
    ink: '#c81a1a',
    text: 'TOD',
    sub: 'MOTOR MOTEL',
    trim: '#c81a1a',
  }),
};
