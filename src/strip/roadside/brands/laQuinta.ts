import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** La Quinta Inn & Suites. */
export const laQuinta: Brand = {
  id: 'laQuinta',
  match: /^La Quinta/,
  pole: 'monument',
  color: '#0a4a7a',
  sign: panel('brand_laQuinta', {
    bg: '#0a4a7a',
    ink: '#ffffff',
    text: 'LA QUINTA',
    sub: 'INN & SUITES',
    trim: '#e8a02a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
