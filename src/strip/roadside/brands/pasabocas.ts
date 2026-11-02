import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Colombian pandebono and buñuelos. */
export const pasabocas: Brand = {
  id: 'pasabocas',
  match: /^Pasabocas Colombian Bakery$/,
  pole: 'monument',
  color: '#1a3a6a',
  sign: panel('brand_pasabocas', {
    bg: '#ffd400',
    ink: '#1a3a8a',
    text: 'Pasabocas',
    sub: 'COLOMBIAN BAKERY',
    trim: '#c81a1a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
