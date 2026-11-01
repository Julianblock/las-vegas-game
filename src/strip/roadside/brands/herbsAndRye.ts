import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Herbs & Rye, the speakeasy steakhouse on Sahara. */
export const herbsAndRye: Brand = {
  id: 'herbsAndRye',
  match: /^Herbs & Rye/,
  pole: 'monument',
  color: '#111111',
  free: true,
  sign: panel('brand_herbsAndRye', {
    bg: '#111111',
    ink: '#c8a464',
    text: 'HERBS & RYE',
    trim: '#c8a464',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
