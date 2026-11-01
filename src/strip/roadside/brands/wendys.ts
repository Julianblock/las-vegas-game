import { BRUSH } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Red script on white. */
export const wendys: Brand = {
  id: 'wendys',
  match: /^Wendy's$/,
  pole: 'tall',
  color: '#e2203d',
  sign: panel('brand_wendys', {
    bg: '#ffffff',
    ink: '#e2203d',
    text: "Wendy's",
    trim: '#e2203d',
    font: (p) => `${p}px ${BRUSH}`,
  }),
};
