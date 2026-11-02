import type { Brand } from '../brand';
import { panel } from '../panel';

/** A backpackers’ hostel in an old motel. */
export const travelersHostel: Brand = {
  id: 'travelersHostel',
  match: /^Travelers Bed/,
  pole: 'monument',
  color: '#1a3a1a',
  sign: panel('brand_travelersHostel', {
    bg: '#f0e8c8',
    ink: '#1a5a2a',
    text: 'Travelers',
    sub: 'HOSTEL',
    trim: '#1a5a2a',
  }),
};
