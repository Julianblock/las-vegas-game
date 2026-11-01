import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The siren's green, on a low monument at the drive-through pads. */
export const starbucks: Brand = {
  id: 'starbucks',
  match: /^Starbucks$/,
  pole: 'monument',
  color: '#00704a',
  sign: panel('brand_starbucks', {
    bg: '#00704a',
    ink: '#ffffff',
    text: 'STARBUCKS',
    sub: 'COFFEE',
    trim: '#ffffff',
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
