import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The discount pumps, blue on white. */
export const arco: Brand = {
  id: 'arco',
  match: /^Arco$/,
  pole: 'fuel',
  color: '#0047ba',
  sign: panel('brand_arco', {
    bg: '#ffffff',
    ink: '#0047ba',
    text: 'ARCO',
    trim: '#ff6a13',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
