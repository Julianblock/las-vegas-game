import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A motor court across from the arches. */
export const gatewayMotel: Brand = {
  id: 'gatewayMotel',
  match: /^Gateway Motel$/,
  pole: 'tall',
  color: '#1a3a5a',
  sign: panel('brand_gatewayMotel', {
    bg: '#ff5aa8',
    ink: '#ffffff',
    text: 'Gateway',
    sub: 'MOTEL · VACANCY',
    trim: '#40e0ff',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
