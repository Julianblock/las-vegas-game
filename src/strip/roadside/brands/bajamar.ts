import type { Brand } from '../brand';
import { panel } from '../panel';

/** Baja seafood tacos and ceviche. */
export const bajamar: Brand = {
  id: 'bajamar',
  match: /^Bajamar$/,
  pole: 'monument',
  color: '#1a3a5a',
  free: true,
  sign: panel('brand_bajamar', {
    bg: '#e8f4f8',
    ink: '#0a4a8a',
    text: 'Bajamar',
    sub: 'SEAFOOD & TACOS',
    trim: '#0a4a8a',
  }),
};
