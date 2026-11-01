import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Pep Boys. */
export const pepBoys: Brand = {
  id: 'pepBoys',
  match: /^Pep Boys/,
  pole: 'tall',
  color: '#c8102e',
  sign: panel('brand_pepBoys', {
    bg: '#ffffff',
    ink: '#c8102e',
    text: 'PEP BOYS',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
