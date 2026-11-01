import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Kung Fu Tea. */
export const kungFuTea: Brand = {
  id: 'kungFuTea',
  match: /^Kung Fu Tea/,
  pole: 'monument',
  color: '#c8102e',
  sign: panel('brand_kungFuTea', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: 'KUNG FU TEA',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
