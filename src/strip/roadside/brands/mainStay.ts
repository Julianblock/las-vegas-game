import type { Brand } from '../brand';
import { panel } from '../panel';

/** Extended-stay suites off Paradise. */
export const mainStay: Brand = {
  id: 'mainStay',
  match: /^MainStay Suites$/,
  pole: 'tall',
  color: '#1a3a5a',
  free: true,
  sign: panel('brand_mainStay', {
    bg: '#ffffff',
    ink: '#1a5a8a',
    text: 'MainStay Suites',
    sub: 'EXTENDED STAY',
    trim: '#1a5a8a',
  }),
};
