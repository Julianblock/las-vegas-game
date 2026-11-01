import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Bagelmania deli. */
export const bagelmania: Brand = {
  id: 'bagelmania',
  match: /^Bagelmania/,
  pole: 'monument',
  color: '#c8102e',
  free: true,
  sign: panel('brand_bagelmania', {
    bg: '#ffcc33',
    ink: '#c8102e',
    text: 'BAGELMANIA',
    sub: 'DELI',
    trim: '#c8102e',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
