import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Antiques and oddities. */
export const medussas: Brand = {
  id: 'medussas',
  match: /^Medussa's antiques$/,
  pole: 'monument',
  color: '#1a3a3a',
  sign: panel('brand_medussas', {
    bg: '#1a3a3a',
    ink: '#40e0c0',
    text: 'Medussa\'s',
    sub: 'ANTIQUES',
    trim: '#40e0c0',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
