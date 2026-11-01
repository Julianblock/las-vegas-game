import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Applebee’s Grill + Bar. */
export const applebees: Brand = {
  id: 'applebees',
  match: /^Applebee's/,
  pole: 'tall',
  color: '#c8102e',
  sign: panel('brand_applebees', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: "Applebee's",
    sub: 'GRILL + BAR',
    trim: '#2a8a2a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
