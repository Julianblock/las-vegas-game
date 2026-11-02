import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A barber pole on the Gateway stretch. */
export const boulevardBarber: Brand = {
  id: 'boulevardBarber',
  match: /^Boulevard Barber Shop$/,
  pole: 'monument',
  color: '#1a2a5a',
  sign: panel('brand_boulevardBarber', {
    bg: '#ffffff',
    ink: '#c81a1a',
    text: 'Boulevard',
    sub: 'BARBER SHOP',
    trim: '#1a3a8a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
