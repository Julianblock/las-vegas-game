import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A wedding chapel with a fountain out front. */
export const monBelAmi: Brand = {
  id: 'monBelAmi',
  match: /^Mon Bel Ami Wedding Chapel$/,
  pole: 'tall',
  color: '#5a1a3a',
  sign: panel('brand_monBelAmi', {
    bg: '#fff0f4',
    ink: '#a01a4a',
    text: 'Mon Bel Ami',
    sub: 'WEDDING CHAPEL',
    trim: '#c8a040',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
