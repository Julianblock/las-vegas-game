import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Mexican kitchen on Main. */
export const lettys: Brand = {
  id: 'lettys',
  match: /^Letty's/,
  pole: 'monument',
  color: '#3a1a1a',
  sign: panel('brand_lettys', {
    bg: '#ffd400',
    ink: '#a01a1a',
    text: 'Letty\'s',
    sub: 'DE LETICIA’S COCINA',
    trim: '#1a6a2a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
