import { ROUND } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Jamba. */
export const jamba: Brand = {
  id: 'jamba',
  match: /^Jamba/,
  pole: 'monument',
  color: '#7ab02a',
  sign: panel('brand_jamba', {
    bg: '#ffffff',
    ink: '#ff6a1a',
    text: 'jamba',
    trim: '#7ab02a',
    font: (p) => `900 ${p}px ${ROUND}`,
  }),
};
