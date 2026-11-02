import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A remade motor hotel with a pool courtyard. */
export const arubaHotel: Brand = {
  id: 'arubaHotel',
  match: /^Aruba Hotel/,
  pole: 'tall',
  color: '#1a4a5a',
  sign: panel('brand_arubaHotel', {
    bg: '#40c8e8',
    ink: '#ffffff',
    text: 'Aruba',
    sub: 'HOTEL & SPA',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
