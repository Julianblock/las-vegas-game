import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Orange cabinet, white wordmark. */
export const popeyes: Brand = {
  id: 'popeyes',
  match: /^Popeyes$/,
  pole: 'tall',
  color: '#f26122',
  sign: panel('brand_popeyes', {
    bg: '#f26122',
    ink: '#ffffff',
    text: 'Popeyes',
    sub: 'LOUISIANA KITCHEN',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
