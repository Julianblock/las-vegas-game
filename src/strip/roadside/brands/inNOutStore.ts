import type { Brand } from '../brand';
import { panel } from '../panel';

/** Company store for the shirts and the merch. */
export const inNOutStore: Brand = {
  id: 'inNOutStore',
  match: /^In-N-Out Company Store$/,
  pole: 'monument',
  color: '#c81a1a',
  free: true,
  sign: panel('brand_inNOutStore', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'In-N-Out',
    sub: 'COMPANY STORE',
    trim: '#ffd400',
  }),
};
