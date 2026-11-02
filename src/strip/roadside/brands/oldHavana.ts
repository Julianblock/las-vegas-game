import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Cigars and a lounge. */
export const oldHavana: Brand = {
  id: 'oldHavana',
  match: /^Old Havana Lounge$/,
  pole: 'monument',
  color: '#3a1a0a',
  sign: panel('brand_oldHavana', {
    bg: '#f0d8a0',
    ink: '#5a2a0a',
    text: 'Old Havana',
    sub: 'CIGAR LOUNGE',
    trim: '#5a2a0a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
