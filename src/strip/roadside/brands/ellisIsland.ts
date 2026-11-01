import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Ellis Island, the locals casino and brewery on Koval. */
export const ellisIsland: Brand = {
  id: 'ellisIsland',
  match: /^Ellis Island/,
  pole: 'tall',
  color: '#0a2a6a',
  free: true,
  sign: panel('brand_ellisIsland', {
    bg: '#0a2a6a',
    ink: '#ffffff',
    text: 'ELLIS ISLAND',
    sub: 'CASINO · BREWERY · BBQ',
    trim: '#d0202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
