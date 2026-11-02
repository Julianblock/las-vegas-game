import type { Brand } from '../brand';
import { panel } from '../panel';

/** A vegan cooking school and diner. */
export const vegasVegan: Brand = {
  id: 'vegasVegan',
  match: /^Vegas Vegan Culinary/,
  pole: 'monument',
  color: '#1a3a1a',
  sign: panel('brand_vegasVegan', {
    bg: '#e8f8d8',
    ink: '#1a5a1a',
    text: 'Vegas Vegan',
    sub: 'CULINARY SCHOOL & EATERY',
    trim: '#1a5a1a',
  }),
};
