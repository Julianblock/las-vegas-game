import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Best Western. */
export const bestWestern: Brand = {
  id: 'bestWestern',
  match: /^Best Western/,
  pole: 'tall',
  color: '#0a3a8a',
  sign: panel('brand_bestWestern', {
    bg: '#0a3a8a',
    ink: '#ffcc33',
    text: 'BEST WESTERN',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
