import type { Brand } from '../brand';
import { panel } from '../panel';

/** A post office with the eagle on the sign. */
export const usps: Brand = {
  id: 'usps',
  match: /^USPS|^United States Post Office/,
  pole: 'monument',
  color: '#1a2a5a',
  free: true,
  sign: panel('brand_usps', {
    bg: '#ffffff',
    ink: '#1a2a6a',
    text: 'UNITED STATES',
    sub: 'POSTAL SERVICE',
    trim: '#c81a1a',
  }),
};
