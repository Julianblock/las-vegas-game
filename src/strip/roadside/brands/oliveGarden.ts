import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Olive Garden. */
export const oliveGarden: Brand = {
  id: 'oliveGarden',
  match: /^Olive Garden/,
  pole: 'tall',
  color: '#5a6b2a',
  sign: panel('brand_oliveGarden', {
    bg: '#5a6b2a',
    ink: '#ffffff',
    text: 'Olive Garden',
    sub: 'ITALIAN KITCHEN',
    trim: '#c8a464',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
