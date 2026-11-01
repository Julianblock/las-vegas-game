import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Pizza Hut. */
export const pizzaHut: Brand = {
  id: 'pizzaHut',
  match: /^Pizza Hut$/,
  pole: 'tall',
  color: '#d0202a',
  sign: panel('brand_pizzaHut', {
    bg: '#d0202a',
    ink: '#ffffff',
    text: 'Pizza Hut',
    trim: '#ffffff',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
