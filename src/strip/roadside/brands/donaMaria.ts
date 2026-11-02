import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tamales by the dozen, a downtown institution. */
export const donaMaria: Brand = {
  id: 'donaMaria',
  match: /^Dona Maria/,
  pole: 'tall',
  color: '#5a1a1a',
  sign: panel('brand_donaMaria', {
    bg: '#f8e8c8',
    ink: '#a01a1a',
    text: 'Doña María',
    sub: 'TAMALES',
    trim: '#1a6a2a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
