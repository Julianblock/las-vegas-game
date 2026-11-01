import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Peppermill restaurant and fireside lounge. */
export const peppermill: Brand = {
  id: 'peppermill',
  match: /^Peppermill/,
  pole: 'tall',
  color: '#5a1a7a',
  free: true,
  sign: panel('brand_peppermill', {
    bg: '#5a1a7a',
    ink: '#ff6ad0',
    text: 'PEPPERMILL',
    sub: 'RESTAURANT · FIRESIDE LOUNGE',
    trim: '#5ad0ff',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
