import { BRUSH } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** White script on red, closed Sundays. */
export const chickFilA: Brand = {
  id: 'chickFilA',
  match: /^Chick-fil-A$/,
  pole: 'monument',
  color: '#dd0031',
  sign: panel('brand_chickFilA', {
    bg: '#dd0031',
    ink: '#ffffff',
    text: 'Chick-fil-A',
    font: (p) => `${p}px ${BRUSH}`,
  }),
};
