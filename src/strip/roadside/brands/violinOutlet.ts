import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Strings, bows and rentals. */
export const violinOutlet: Brand = {
  id: 'violinOutlet',
  match: /^Violin Outlet$/,
  pole: 'monument',
  color: '#3a1a0a',
  sign: panel('brand_violinOutlet', {
    bg: '#f0e0c0',
    ink: '#5a2a0a',
    text: 'Violin Outlet',
    sub: 'STRINGS · RENTALS',
    trim: '#8a4a1a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
