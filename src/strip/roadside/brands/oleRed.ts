import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Ole Red, Blake Shelton’s honky-tonk on the Flamingo corner. */
export const oleRed: Brand = {
  id: 'oleRed',
  match: /^Ole Red/,
  pole: 'monument',
  color: '#8a1a1a',
  free: true,
  sign: panel('brand_oleRed', {
    bg: '#8a1a1a',
    ink: '#ffffff',
    text: 'OLE RED',
    sub: 'HONKY-TONK',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
