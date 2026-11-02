import type { Brand } from '../brand';
import { panel } from '../panel';

/** Sports bar with video poker. */
export const bourbonStreet: Brand = {
  id: 'bourbonStreet',
  match: /^Bourbon Street Sports Bar$/,
  pole: 'tall',
  color: '#2a1a3a',
  free: true,
  sign: panel('brand_bourbonStreet', {
    bg: '#4a1a6a',
    ink: '#ffd400',
    text: 'Bourbon Street',
    sub: 'SPORTS BAR · GAMING',
    trim: '#40c040',
  }),
};
