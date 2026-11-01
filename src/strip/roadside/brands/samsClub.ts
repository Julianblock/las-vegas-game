import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Sam’s Club. */
export const samsClub: Brand = {
  id: 'samsClub',
  match: /^Sam's Club/,
  pole: 'tall',
  color: '#0067a0',
  sign: panel('brand_samsClub', {
    bg: '#0067a0',
    ink: '#ffffff',
    text: "SAM'S CLUB",
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
