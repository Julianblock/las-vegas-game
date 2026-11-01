import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Holiday Inn Express. */
export const holidayInn: Brand = {
  id: 'holidayInn',
  match: /^Holiday Inn/,
  pole: 'monument',
  color: '#0a5a3a',
  sign: panel('brand_holidayInn', {
    bg: '#ffffff',
    ink: '#0a5a3a',
    text: 'Holiday Inn',
    sub: 'EXPRESS',
    trim: '#0a5ab0',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
