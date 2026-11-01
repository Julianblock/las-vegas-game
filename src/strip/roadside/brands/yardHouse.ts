import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Yard House. */
export const yardHouse: Brand = {
  id: 'yardHouse',
  match: /^Yard House/,
  pole: 'monument',
  color: '#111111',
  sign: panel('brand_yardHouse', {
    bg: '#111111',
    ink: '#ffffff',
    text: 'YARD HOUSE',
    trim: '#c8a464',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
