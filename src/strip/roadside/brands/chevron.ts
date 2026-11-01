import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Blue and red chevrons over the wordmark. */
export const chevron: Brand = {
  id: 'chevron',
  match: /^Chevron$/,
  pole: 'fuel',
  color: '#0054a4',
  sign: panel('brand_chevron', {
    bg: '#ffffff',
    ink: '#0054a4',
    text: 'Chevron',
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
