import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** CVS Pharmacy. */
export const cvs: Brand = {
  id: 'cvs',
  match: /^CVS/,
  pole: 'tall',
  color: '#cc0000',
  sign: panel('brand_cvs', {
    bg: '#ffffff',
    ink: '#cc0000',
    text: 'CVS',
    sub: 'pharmacy',
    trim: '#cc0000',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
