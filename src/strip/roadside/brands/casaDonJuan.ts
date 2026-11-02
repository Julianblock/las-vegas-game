import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Mexican food on Main since 1993. */
export const casaDonJuan: Brand = {
  id: 'casaDonJuan',
  match: /^Casa Don Juan$/,
  pole: 'tall',
  color: '#5a1a1a',
  sign: panel('brand_casaDonJuan', {
    bg: '#f8e8c8',
    ink: '#a01a1a',
    text: 'Casa Don Juan',
    sub: 'MEXICAN RESTAURANT',
    trim: '#1a6a2a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
