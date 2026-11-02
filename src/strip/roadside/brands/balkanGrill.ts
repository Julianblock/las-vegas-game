import type { Brand } from '../brand';
import { panel } from '../panel';

/** Ćevapi and burek on East Sahara. */
export const balkanGrill: Brand = {
  id: 'balkanGrill',
  match: /^Balkan Bar and Grill$/,
  pole: 'monument',
  color: '#1a2a5a',
  free: true,
  sign: panel('brand_balkanGrill', {
    bg: '#ffffff',
    ink: '#1a2a8a',
    text: 'Balkan Grill',
    sub: 'BAR · ĆEVAPI · BUREK',
    trim: '#c81a1a',
  }),
};
