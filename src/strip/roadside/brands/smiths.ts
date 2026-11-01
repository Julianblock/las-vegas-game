import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Smith’s Food & Drug, Kroger in Nevada. */
export const smiths: Brand = {
  id: 'smiths',
  match: /^Smith's/,
  pole: 'tall',
  color: '#e31837',
  sign: panel('brand_smiths', {
    bg: '#e31837',
    ink: '#ffffff',
    text: "Smith's",
    sub: 'FOOD & DRUG',
    trim: '#ffffff',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
