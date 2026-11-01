import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Cheesecake Factory. */
export const cheesecakeFactory: Brand = {
  id: 'cheesecakeFactory',
  match: /^The Cheesecake Factory/,
  pole: 'monument',
  color: '#3a2a1a',
  sign: panel('brand_cheesecakeFactory', {
    bg: '#3a2a1a',
    ink: '#f2e2c0',
    text: 'The Cheesecake Factory',
    trim: '#c8a464',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
