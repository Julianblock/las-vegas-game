import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Greens and Proteins, a Las Vegas healthy-eating chain. */
export const greensAndProteins: Brand = {
  id: 'greensAndProteins',
  match: /^Greens and Proteins/,
  pole: 'monument',
  color: '#2a8a3a',
  free: true,
  sign: panel('brand_greensAndProteins', {
    bg: '#2a8a3a',
    ink: '#ffffff',
    text: 'GREENS AND PROTEINS',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
