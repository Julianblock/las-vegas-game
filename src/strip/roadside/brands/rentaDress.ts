import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tux rentals for chapel weddings. */
export const rentaDress: Brand = {
  id: 'rentaDress',
  match: /^Renta-Dress & Tux$/,
  pole: 'tall',
  color: '#1a1a1a',
  sign: panel('brand_rentaDress', {
    bg: '#ffffff',
    ink: '#1a1a1a',
    text: 'Renta-Dress',
    sub: '& TUX',
    trim: '#c8a040',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
