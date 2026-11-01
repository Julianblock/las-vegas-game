import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Firestone Complete Auto Care. */
export const firestone: Brand = {
  id: 'firestone',
  match: /^Firestone/,
  pole: 'tall',
  color: '#c8102e',
  sign: panel('brand_firestone', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: 'FIRESTONE',
    sub: 'COMPLETE AUTO CARE',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
