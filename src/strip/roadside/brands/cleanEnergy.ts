import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Clean Energy natural gas. */
export const cleanEnergy: Brand = {
  id: 'cleanEnergy',
  match: /^Clean Energy/,
  pole: 'fuel',
  color: '#0a6a3a',
  sign: panel('brand_cleanEnergy', {
    bg: '#ffffff',
    ink: '#0a6a3a',
    text: 'CLEAN ENERGY',
    sub: 'CNG',
    trim: '#0a6a3a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
