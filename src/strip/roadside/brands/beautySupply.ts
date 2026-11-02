import type { Brand } from '../brand';
import { panel } from '../panel';

/** Wigs, nails and hair care by the aisle. */
export const beautySupply: Brand = {
  id: 'beautySupply',
  match: /^Beauty Supply Warehouse$/,
  pole: 'tall',
  color: '#5a1a4a',
  free: true,
  sign: panel('brand_beautySupply', {
    bg: '#ff5aa8',
    ink: '#ffffff',
    text: 'Beauty Supply',
    sub: 'WAREHOUSE',
    trim: '#ffffff',
  }),
};
