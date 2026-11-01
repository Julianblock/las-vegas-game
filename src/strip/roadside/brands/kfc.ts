import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** KFC. */
export const kfc: Brand = {
  id: 'kfc',
  match: /^(KFC|Kentucky Fried)/,
  pole: 'tall',
  color: '#a3080c',
  sign: panel('brand_kfc', {
    bg: '#a3080c',
    ink: '#ffffff',
    text: 'KFC',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
