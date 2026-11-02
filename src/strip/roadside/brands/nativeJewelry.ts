import type { Brand } from '../brand';
import { panel } from '../panel';

/** Turquoise and silver on the Gateway stretch. */
export const nativeJewelry: Brand = {
  id: 'nativeJewelry',
  match: /^Native American Jewelry$/,
  pole: 'monument',
  color: '#3a2a1a',
  free: true,
  sign: panel('brand_nativeJewelry', {
    bg: '#40b8b0',
    ink: '#ffffff',
    text: 'Native American',
    sub: 'JEWELRY · TURQUOISE',
    trim: '#c8a060',
  }),
};
