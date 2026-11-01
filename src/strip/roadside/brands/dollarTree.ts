import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Dollar Tree. */
export const dollarTree: Brand = {
  id: 'dollarTree',
  match: /^Dollar Tree/,
  pole: 'tall',
  color: '#00843d',
  sign: panel('brand_dollarTree', {
    bg: '#ffffff',
    ink: '#00843d',
    text: 'DOLLAR TREE',
    trim: '#00843d',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
