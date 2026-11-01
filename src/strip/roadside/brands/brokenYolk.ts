import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Broken Yolk Cafe. */
export const brokenYolk: Brand = {
  id: 'brokenYolk',
  match: /^Broken Yolk/,
  pole: 'monument',
  color: '#c8202a',
  sign: panel('brand_brokenYolk', {
    bg: '#ffd200',
    ink: '#c8202a',
    text: 'Broken Yolk Cafe',
    trim: '#c8202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
