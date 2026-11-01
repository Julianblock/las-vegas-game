import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Blueberry Hill, the family diner on the Decatur corner since 1980, open all night. */
export const blueberryHill: Brand = {
  id: 'blueberryHill',
  match: /^blueberry hill/i,
  pole: 'tall',
  color: '#1a3a8a',
  free: true,
  sign: panel('brand_blueberryHill', {
    bg: '#1a3a8a',
    ink: '#ffffff',
    text: 'Blueberry Hill',
    sub: 'FAMILY RESTAURANT · 24 HRS',
    trim: '#7ac0ff',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
