import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Flamingo Decatur Plaza, the strip mall on the corner. */
export const flamingoDecaturPlaza: Brand = {
  id: 'flamingoDecaturPlaza',
  match: /^Flamingo Decatur Plaza/,
  pole: 'tall',
  color: '#5a3a2a',
  free: true,
  sign: panel('brand_flamingoDecaturPlaza', {
    bg: '#f2e2c0',
    ink: '#5a3a2a',
    text: 'FLAMINGO DECATUR',
    sub: 'PLAZA',
    trim: '#c8202a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
