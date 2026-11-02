import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Dealers under one roof. */
export const antiqueAlley: Brand = {
  id: 'antiqueAlley',
  match: /^Antique Alley Mall$/,
  pole: 'tall',
  color: '#3a2a1a',
  sign: panel('brand_antiqueAlley', {
    bg: '#f0d8a0',
    ink: '#5a2a0a',
    text: 'Antique Alley',
    sub: 'MALL',
    trim: '#5a2a0a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
