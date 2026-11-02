import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A 1950s motor inn on the south Strip. */
export const diamondInn: Brand = {
  id: 'diamondInn',
  match: /^Diamond Inn Motel$/,
  pole: 'tall',
  color: '#1a2a4a',
  free: true,
  sign: panel('brand_diamondInn', {
    bg: '#1a2a6a',
    ink: '#ffd400',
    text: 'Diamond Inn',
    sub: 'MOTEL',
    trim: '#40c8ff',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
