import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The red lips logo. */
export const dairyQueen: Brand = {
  id: 'dairyQueen',
  match: /^Dairy Queen$/,
  pole: 'tall',
  color: '#ee3124',
  sign: panel('brand_dairyQueen', {
    bg: '#ee3124',
    ink: '#ffffff',
    text: 'DQ',
    sub: 'GRILL & CHILL',
    trim: '#0a4a9a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
