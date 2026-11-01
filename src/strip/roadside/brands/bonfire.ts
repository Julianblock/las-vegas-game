import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Bonfire bar and kitchen. */
export const bonfire: Brand = {
  id: 'bonfire',
  match: /^Bonfire/,
  pole: 'monument',
  color: '#3a1a0a',
  free: true,
  sign: panel('brand_bonfire', {
    bg: '#3a1a0a',
    ink: '#ff8a2a',
    text: 'BONFIRE',
    sub: 'KITCHEN & TAVERN',
    trim: '#ffcc33',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
