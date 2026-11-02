import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A neighbourhood bar. */
export const threeSheets: Brand = {
  id: 'threeSheets',
  match: /^Three Sheets$/,
  pole: 'monument',
  color: '#1a2a3a',
  sign: panel('brand_threeSheets', {
    bg: '#1a2a3a',
    ink: '#40c8ff',
    text: 'Three Sheets',
    sub: 'BAR',
    trim: '#40c8ff',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
