import { ROUND } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The ARCO convenience store. */
export const ampm: Brand = {
  id: 'ampm',
  match: /^ampm$/,
  pole: 'fuel',
  color: '#e41f2c',
  sign: panel('brand_ampm', {
    bg: '#ffffff',
    ink: '#e41f2c',
    text: 'ampm',
    trim: '#ff9e1b',
    font: (p) => `900 ${p}px ${ROUND}`,
  }),
};
