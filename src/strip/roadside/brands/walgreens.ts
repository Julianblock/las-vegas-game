import { BRUSH } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The red script on every big corner. */
export const walgreens: Brand = {
  id: 'walgreens',
  match: /^Walgreens$/,
  pole: 'tall',
  color: '#e31837',
  sign: panel('brand_walgreens', {
    bg: '#e31837',
    ink: '#ffffff',
    text: 'Walgreens',
    font: (p) => `${p}px ${BRUSH}`,
  }),
};
