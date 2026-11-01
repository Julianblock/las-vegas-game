import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Benihana teppanyaki. */
export const benihana: Brand = {
  id: 'benihana',
  match: /^Benihana/,
  pole: 'monument',
  color: '#c8102e',
  sign: panel('brand_benihana', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: 'BENIHANA',
    trim: '#111111',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
