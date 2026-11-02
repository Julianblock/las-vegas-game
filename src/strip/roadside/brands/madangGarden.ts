import type { Brand } from '../brand';
import { panel } from '../panel';

/** Korean barbecue in the plaza. */
export const madangGarden: Brand = {
  id: 'madangGarden',
  match: /^Madang Garden$/,
  pole: 'monument',
  color: '#3a1a1a',
  sign: panel('brand_madangGarden', {
    bg: '#f0e0c8',
    ink: '#8a1a1a',
    text: 'MADANG',
    sub: 'KOREAN BBQ · GARDEN',
    trim: '#1a5a2a',
  }),
};
