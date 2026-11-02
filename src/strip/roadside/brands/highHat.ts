import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A 1950s motel with a top hat on its sign. */
export const highHat: Brand = {
  id: 'highHat',
  match: /^High Hat Regency$/,
  pole: 'tall',
  color: '#1a1a1a',
  sign: panel('brand_highHat', {
    bg: '#1a1a2a',
    ink: '#ffd400',
    text: 'High Hat',
    sub: 'REGENCY · MOTEL',
    trim: '#ff3a2a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
