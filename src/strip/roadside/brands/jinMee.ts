import type { Brand } from '../brand';
import { panel } from '../panel';

/** Korean barbecue grills at every table. */
export const jinMee: Brand = {
  id: 'jinMee',
  match: /^Jin Mee Korean BBQ$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_jinMee', {
    bg: '#c81a1a',
    ink: '#ffffff',
    text: 'JIN MEE',
    sub: 'KOREAN BBQ',
    trim: '#ffd400',
  }),
};
