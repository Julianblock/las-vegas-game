import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** El Mirador Motel. */
export const elMirador: Brand = {
  id: 'elMirador',
  match: /^El Mirador/,
  pole: 'tall',
  color: '#c8702a',
  free: true,
  sign: panel('brand_elMirador', {
    bg: '#f2e2c0',
    ink: '#c8202a',
    text: 'El Mirador',
    sub: 'MOTEL · VACANCY',
    trim: '#2a8a8a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
