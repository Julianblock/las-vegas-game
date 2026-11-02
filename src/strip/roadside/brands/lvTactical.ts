import type { Brand } from '../brand';
import { panel } from '../panel';

/** Gear and range bags. */
export const lvTactical: Brand = {
  id: 'lvTactical',
  match: /^Las Vegas Tactical$/,
  pole: 'tall',
  color: '#2a2a1a',
  free: true,
  sign: panel('brand_lvTactical', {
    bg: '#3a3a2a',
    ink: '#e8e0c0',
    text: 'LV TACTICAL',
    sub: 'GEAR · OPTICS',
    trim: '#a89a6a',
  }),
};
