import type { Brand } from '../brand';
import { panel } from '../panel';

/** Payday loans in a strip mall. */
export const kostersCash: Brand = {
  id: 'kostersCash',
  match: /^Koster's Cash Loans$/,
  pole: 'tall',
  color: '#1a3a1a',
  free: true,
  sign: panel('brand_kostersCash', {
    bg: '#1a7a2a',
    ink: '#ffffff',
    text: 'Koster\'s',
    sub: 'CASH LOANS',
    trim: '#ffd400',
  }),
};
