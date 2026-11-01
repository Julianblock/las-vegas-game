import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Golden arches on a pole: fifteen of them in the corridor alone. */
export const mcdonalds: Brand = {
  id: 'mcdonalds',
  match: /^McDonald's$/,
  pole: 'arches',
  color: '#da291c',
  sign: panel('brand_mcdonalds', {
    bg: '#da291c',
    ink: '#ffc72c',
    text: "McDonald's",
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
