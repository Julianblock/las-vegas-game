import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Raising Cane’s chicken fingers. */
export const raisingCanes: Brand = {
  id: 'raisingCanes',
  match: /^Raising Cane/,
  pole: 'tall',
  color: '#c8102e',
  sign: panel('brand_raisingCanes', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: "Raising Cane's",
    sub: 'CHICKEN FINGERS',
    trim: '#ffd100',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
