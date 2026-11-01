import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** P.F. Chang’s. */
export const pfChangs: Brand = {
  id: 'pfChangs',
  match: /^P\.? ?F\.? Chang/,
  pole: 'monument',
  color: '#111111',
  sign: panel('brand_pfChangs', {
    bg: '#111111',
    ink: '#c8a464',
    text: "P.F. CHANG'S",
    trim: '#c8a464',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
