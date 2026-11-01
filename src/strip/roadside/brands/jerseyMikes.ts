import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Jersey Mike’s Subs. */
export const jerseyMikes: Brand = {
  id: 'jerseyMikes',
  match: /^Jersey Mike/,
  pole: 'monument',
  color: '#0a3a7a',
  sign: panel('brand_jerseyMikes', {
    bg: '#0a3a7a',
    ink: '#ffffff',
    text: "Jersey Mike's",
    sub: 'SUBS',
    trim: '#e31837',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
