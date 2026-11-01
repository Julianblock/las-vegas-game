import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The yellow lozenge, open around the clock like the town. */
export const dennys: Brand = {
  id: 'dennys',
  match: /^Denny's$/,
  pole: 'tall',
  color: '#ffd200',
  sign: panel('brand_dennys', {
    bg: '#ffd200',
    ink: '#d0202e',
    text: "Denny's",
    sub: 'OPEN 24 HOURS',
    trim: '#d0202e',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
