import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Red cabinet with the green trim. */
export const delTaco: Brand = {
  id: 'delTaco',
  match: /^Del Taco$/,
  pole: 'tall',
  color: '#e2231a',
  sign: panel('brand_delTaco', {
    bg: '#e2231a',
    ink: '#ffffff',
    text: 'DEL TACO',
    trim: '#00953a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
