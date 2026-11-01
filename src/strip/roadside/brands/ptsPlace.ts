import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** PT’s, the Nevada chain of neighbourhood gaming taverns. */
export const ptsPlace: Brand = {
  id: 'ptsPlace',
  match: /^PT's/,
  pole: 'monument',
  color: '#111111',
  free: true,
  sign: panel('brand_ptsPlace', {
    bg: '#111111',
    ink: '#ffd200',
    text: "PT's",
    sub: 'PUB · GAMING',
    trim: '#d0202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
