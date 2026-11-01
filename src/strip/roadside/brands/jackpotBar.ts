import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Jackpot Bar & Grill. */
export const jackpotBar: Brand = {
  id: 'jackpotBar',
  match: /^Jackpot Bar/,
  pole: 'monument',
  color: '#c8102e',
  free: true,
  sign: panel('brand_jackpotBar', {
    bg: '#c8102e',
    ink: '#ffcc33',
    text: 'JACKPOT',
    sub: 'BAR & GRILL · GAMING',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
