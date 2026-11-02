import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Old motor court on the south Strip. */
export const desertOasis: Brand = {
  id: 'desertOasis',
  match: /^Desert Oasis$/,
  pole: 'tall',
  color: '#1a4a4a',
  free: true,
  sign: panel('brand_desertOasis', {
    bg: '#40c8b8',
    ink: '#ffffff',
    text: 'Desert Oasis',
    sub: 'MOTEL · VACANCY',
    trim: '#ff5a3a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
