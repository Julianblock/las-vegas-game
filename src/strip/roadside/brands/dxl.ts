import type { Brand } from '../brand';
import { panel } from '../panel';

/** Big and tall menswear. */
export const dxl: Brand = {
  id: 'dxl',
  match: /^DXL Men's/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_dxl', {
    bg: '#1a1a1a',
    ink: '#ffffff',
    text: 'DXL',
    sub: 'BIG + TALL',
    trim: '#c8a040',
  }),
};
