import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Venezuelan arepas off the boulevard south of downtown. */
export const vivaLasArepas: Brand = {
  id: 'vivaLasArepas',
  match: /^Viva Las Arepas$/,
  pole: 'monument',
  color: '#3a2a1a',
  free: true,
  sign: panel('brand_vivaLasArepas', {
    bg: '#f6d23a',
    ink: '#1a3a8a',
    text: 'Viva Las Arepas',
    sub: 'VENEZUELAN FOOD',
    trim: '#c81a1a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
