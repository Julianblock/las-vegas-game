import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Church’s Texas Chicken. */
export const churchs: Brand = {
  id: 'churchs',
  match: /^Church's/,
  pole: 'tall',
  color: '#d0202a',
  sign: panel('brand_churchs', {
    bg: '#d0202a',
    ink: '#ffffff',
    text: "Church's",
    sub: 'TEXAS CHICKEN',
    trim: '#ffd200',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
