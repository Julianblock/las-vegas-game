import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Auto repair in a quonset. */
export const popsAuto: Brand = {
  id: 'popsAuto',
  match: /^Pop's Automotive$/,
  pole: 'tall',
  color: '#1a1a3a',
  sign: panel('brand_popsAuto', {
    bg: '#1a3a8a',
    ink: '#ffffff',
    text: 'Pop\'s',
    sub: 'AUTOMOTIVE',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
