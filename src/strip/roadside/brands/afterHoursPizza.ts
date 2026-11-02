import type { Brand } from '../brand';
import { panel } from '../panel';

/** Slices for the chapel crowd at 3 a.m. */
export const afterHoursPizza: Brand = {
  id: 'afterHoursPizza',
  match: /^After Hours Pizza$/,
  pole: 'tall',
  color: '#1a1a1a',
  sign: panel('brand_afterHoursPizza', {
    bg: '#c81a1a',
    ink: '#ffffff',
    text: 'After Hours',
    sub: 'PIZZA · OPEN LATE',
    trim: '#ffd400',
  }),
};
