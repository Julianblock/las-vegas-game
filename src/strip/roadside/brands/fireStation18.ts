import type { Brand } from '../brand';
import { panel } from '../panel';

/** Clark County Fire Station 18. */
export const fireStation18: Brand = {
  id: 'fireStation18',
  match: /^Clark County Fire Station Number 18$/,
  pole: 'monument',
  color: '#5a1a1a',
  sign: panel('brand_fireStation18', {
    bg: '#f0e8d8',
    ink: '#a01a1a',
    text: 'FIRE STATION 18',
    sub: 'CLARK COUNTY FIRE',
    trim: '#a01a1a',
  }),
};
