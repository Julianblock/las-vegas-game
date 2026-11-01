import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Marriott hotels. */
export const marriott: Brand = {
  id: 'marriott',
  match: /^(Las Vegas Marriott|Springhill Suites|Courtyard by Marriott|Fairfield Inn|TownePlace)/,
  pole: 'monument',
  color: '#8a1a2a',
  sign: panel('brand_marriott', {
    bg: '#ffffff',
    ink: '#8a1a2a',
    text: 'MARRIOTT',
    trim: '#8a1a2a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
