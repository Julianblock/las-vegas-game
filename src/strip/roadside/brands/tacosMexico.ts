import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tacos Mexico, a Las Vegas taqueria chain. */
export const tacosMexico: Brand = {
  id: 'tacosMexico',
  match: /^Tacos Mexico/,
  pole: 'tall',
  color: '#c8202a',
  free: true,
  sign: panel('brand_tacosMexico', {
    bg: '#c8202a',
    ink: '#ffffff',
    text: 'TACOS MEXICO',
    trim: '#2a8a2a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
