import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Fried whole fish, Nayarit style. */
export const laMojarraLoca: Brand = {
  id: 'laMojarraLoca',
  match: /^La Mojarra Loca$/,
  pole: 'monument',
  color: '#0a3a5a',
  free: true,
  sign: panel('brand_laMojarraLoca', {
    bg: '#40c8e8',
    ink: '#ffffff',
    text: 'La Mojarra Loca',
    sub: 'MARISCOS',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
