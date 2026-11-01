import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Krispy Kreme, hot doughnuts now. */
export const krispyKreme: Brand = {
  id: 'krispyKreme',
  match: /^Krispy Kreme/,
  pole: 'tall',
  color: '#006a3a',
  sign: panel('brand_krispyKreme', {
    bg: '#006a3a',
    ink: '#ffffff',
    text: 'Krispy Kreme',
    sub: 'HOT NOW',
    trim: '#d0202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
