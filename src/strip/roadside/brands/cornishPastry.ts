import type { Brand } from '../brand';
import { panel } from '../panel';

/** Cornish pasties and pints. */
export const cornishPastry: Brand = {
  id: 'cornishPastry',
  match: /^Cornish Pastry Co\.$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_cornishPastry', {
    bg: '#1a1a1a',
    ink: '#ffd400',
    text: 'Cornish Pasty Co.',
    sub: 'PASTIES · PINTS',
    trim: '#ffd400',
  }),
};
