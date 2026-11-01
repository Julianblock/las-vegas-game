import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Firefly tapas kitchen on Paradise and Flamingo. */
export const firefly: Brand = {
  id: 'firefly',
  match: /^Firefly/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_firefly', {
    bg: '#1a1a1a',
    ink: '#ffcc33',
    text: 'Firefly*',
    sub: 'TAPAS KITCHEN & BAR',
    trim: '#ffcc33',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
