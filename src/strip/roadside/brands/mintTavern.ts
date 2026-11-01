import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Mint Tavern. */
export const mintTavern: Brand = {
  id: 'mintTavern',
  match: /^The MINT Tavern/i,
  pole: 'monument',
  color: '#0a5a3a',
  free: true,
  sign: panel('brand_mintTavern', {
    bg: '#0a5a3a',
    ink: '#ffffff',
    text: 'THE MINT',
    sub: 'TAVERN',
    trim: '#ffcc33',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
