import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Albertsons supermarkets. */
export const albertsons: Brand = {
  id: 'albertsons',
  match: /^Albertsons/,
  pole: 'tall',
  color: '#00529f',
  sign: panel('brand_albertsons', {
    bg: '#ffffff',
    ink: '#00529f',
    text: 'Albertsons',
    trim: '#00529f',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
