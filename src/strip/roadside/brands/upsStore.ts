import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The UPS Store. */
export const upsStore: Brand = {
  id: 'upsStore',
  match: /^The UPS Store/,
  pole: 'monument',
  color: '#351c15',
  sign: panel('brand_upsStore', {
    bg: '#351c15',
    ink: '#ffb500',
    text: 'The UPS Store',
    trim: '#ffb500',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
