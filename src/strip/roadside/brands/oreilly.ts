import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** O’Reilly Auto Parts. */
export const oreilly: Brand = {
  id: 'oreilly',
  match: /^O'Reilly/,
  pole: 'tall',
  color: '#00843d',
  sign: panel('brand_oreilly', {
    bg: '#00843d',
    ink: '#ffffff',
    text: "O'REILLY",
    sub: 'AUTO PARTS',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
