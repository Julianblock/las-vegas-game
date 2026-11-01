import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Einstein Bros. Bagels. */
export const einstein: Brand = {
  id: 'einstein',
  match: /^Einstein Bros/,
  pole: 'monument',
  color: '#3a1a0a',
  sign: panel('brand_einstein', {
    bg: '#f2e0c0',
    ink: '#3a1a0a',
    text: 'Einstein Bros.',
    sub: 'BAGELS',
    trim: '#d0202a',
    font: (p) => `900 ${p}px ${SERIF}`,
  }),
};
