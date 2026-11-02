import type { Brand } from '../brand';
import { panel } from '../panel';

/** Budget hotel on the south boulevard. */
export const nirvanaHotel: Brand = {
  id: 'nirvanaHotel',
  match: /^Nirvana Hotel$/,
  pole: 'tall',
  color: '#2a1a4a',
  free: true,
  sign: panel('brand_nirvanaHotel', {
    bg: '#5a2a8a',
    ink: '#ffffff',
    text: 'Nirvana Hotel',
    sub: 'WEEKLY · DAILY',
    trim: '#ffd400',
  }),
};
