import type { Brand } from '../brand';
import { panel } from '../panel';

/** No relation to the other one. */
export const motel8: Brand = {
  id: 'motel8',
  match: /^Motel 8/,
  pole: 'tall',
  color: '#2a2a2a',
  free: true,
  sign: panel('brand_motel8', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'MOTEL 8',
    sub: 'COLOR TV · VACANCY',
    trim: '#c81a1a',
  }),
};
