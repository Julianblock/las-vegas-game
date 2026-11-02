import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Fans, feathers and pasties from a century of burlesque. */
export const burlesqueHall: Brand = {
  id: 'burlesqueHall',
  match: /^Burlesque Hall of Fame$/,
  pole: 'tall',
  color: '#3a0a2a',
  sign: panel('brand_burlesqueHall', {
    bg: '#1a0a1a',
    ink: '#ff5ad0',
    text: 'Burlesque',
    sub: 'HALL OF FAME · MUSEUM',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
