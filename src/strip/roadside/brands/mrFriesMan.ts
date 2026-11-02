import type { Brand } from '../brand';
import { panel } from '../panel';

/** Loaded fries from a Gardena original. */
export const mrFriesMan: Brand = {
  id: 'mrFriesMan',
  match: /^Mr Fries Man$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_mrFriesMan', {
    bg: '#ffd400',
    ink: '#1a1a1a',
    text: 'MR FRIES MAN',
    sub: 'GOURMET FRIES',
    trim: '#c81a1a',
  }),
};
