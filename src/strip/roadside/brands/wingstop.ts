import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Wingstop. */
export const wingstop: Brand = {
  id: 'wingstop',
  match: /^Wingstop/,
  pole: 'tall',
  color: '#006938',
  sign: panel('brand_wingstop', {
    bg: '#006938',
    ink: '#ffffff',
    text: 'WINGSTOP',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
