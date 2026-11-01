import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** AutoZone. */
export const autozone: Brand = {
  id: 'autozone',
  match: /^AutoZone/,
  pole: 'tall',
  color: '#f26522',
  sign: panel('brand_autozone', {
    bg: '#f26522',
    ink: '#ffffff',
    text: 'AutoZone',
    trim: '#d0202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
