import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The pie house near Decatur. */
export const marieCallenders: Brand = {
  id: 'marieCallenders',
  match: /^Marie Callender's$/,
  pole: 'tall',
  color: '#6a1a1a',
  sign: panel('brand_marieCallenders', {
    bg: '#f2e6c8',
    ink: '#6a1a1a',
    text: "Marie Callender's",
    sub: 'RESTAURANT & BAKERY',
    trim: '#6a1a1a',
    font: (p) => `italic bold ${p}px ${SERIF}`,
  }),
};
