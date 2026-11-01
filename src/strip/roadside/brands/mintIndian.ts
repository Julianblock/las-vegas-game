import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Mint Indian Bistro. */
export const mintIndian: Brand = {
  id: 'mintIndian',
  match: /^Mint Indian/,
  pole: 'monument',
  color: '#0a5a3a',
  sign: panel('brand_mintIndian', {
    bg: '#0a5a3a',
    ink: '#ffffff',
    text: 'MINT',
    sub: 'INDIAN BISTRO',
    trim: '#ffcc33',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
