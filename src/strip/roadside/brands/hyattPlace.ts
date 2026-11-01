import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Hyatt Place. */
export const hyattPlace: Brand = {
  id: 'hyattPlace',
  match: /^Hyatt Place/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_hyattPlace', {
    bg: '#1a1a1a',
    ink: '#ffffff',
    text: 'HYATT PLACE',
    trim: '#e8702a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
