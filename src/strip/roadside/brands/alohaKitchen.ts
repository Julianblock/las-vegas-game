import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Plate lunches for the Ninth Island crowd. */
export const alohaKitchen: Brand = {
  id: 'alohaKitchen',
  match: /^Aloha Kitchen$/,
  pole: 'monument',
  color: '#1a4a2a',
  free: true,
  sign: panel('brand_alohaKitchen', {
    bg: '#ffe060',
    ink: '#1a6a3a',
    text: 'Aloha Kitchen',
    sub: 'HAWAIIAN PLATE LUNCH',
    trim: '#ff6a3a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
