import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A mid-century motor hotel near the chapels. */
export const shalimar: Brand = {
  id: 'shalimar',
  match: /^Shalimar Hotel/,
  pole: 'tall',
  color: '#1a3a3a',
  sign: panel('brand_shalimar', {
    bg: '#1a4a5a',
    ink: '#ffd400',
    text: 'Shalimar',
    sub: 'HOTEL',
    trim: '#ff5a8a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
