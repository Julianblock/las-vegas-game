import { ROUND } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Oodle Noodle, hand-pulled noodles. */
export const oodleNoodle: Brand = {
  id: 'oodleNoodle',
  match: /^Oodle Noodle$/,
  pole: 'monument',
  color: '#ff8a1a',
  free: true,
  sign: panel('brand_oodleNoodle', {
    bg: '#ff8a1a',
    ink: '#ffffff',
    text: 'Oodle Noodle',
    sub: 'HAND-PULLED',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${ROUND}`,
  }),
};
