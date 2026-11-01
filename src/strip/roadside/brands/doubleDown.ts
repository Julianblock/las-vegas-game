import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Double Down Saloon, the punk dive on Paradise. */
export const doubleDown: Brand = {
  id: 'doubleDown',
  match: /^Double Down/,
  pole: 'monument',
  color: '#111111',
  free: true,
  sign: panel('brand_doubleDown', {
    bg: '#111111',
    ink: '#e8202a',
    text: 'DOUBLE DOWN',
    sub: 'SALOON · OPEN 24 HRS',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
