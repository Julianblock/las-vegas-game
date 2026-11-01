import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Red box logo, open late. */
export const jackInTheBox: Brand = {
  id: 'jackInTheBox',
  match: /^Jack in the Box$/,
  pole: 'tall',
  color: '#e2231a',
  sign: panel('brand_jackInTheBox', {
    bg: '#ffffff',
    ink: '#e2231a',
    text: 'JACK IN THE BOX',
    trim: '#e2231a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
