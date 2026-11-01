import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** TitleMax. */
export const titleMax: Brand = {
  id: 'titleMax',
  match: /^TitleMax/,
  pole: 'monument',
  color: '#ffcc33',
  sign: panel('brand_titleMax', {
    bg: '#ffcc33',
    ink: '#111111',
    text: 'TitleMax',
    sub: 'TITLE LOANS',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
