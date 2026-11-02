import type { Brand } from '../brand';
import { panel } from '../panel';

/** Cash for your pink slip. */
export const titleLoans: Brand = {
  id: 'titleLoans',
  match: /^Auto Title Loans/,
  pole: 'tall',
  color: '#1a3a1a',
  sign: panel('brand_titleLoans', {
    bg: '#ffd400',
    ink: '#1a1a1a',
    text: 'TITLE LOANS',
    sub: 'PAYDAY · CASH TODAY',
    trim: '#1a7a2a',
  }),
};
