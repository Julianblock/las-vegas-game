import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Born in Glendale, ubiquitous in Las Vegas. */
export const pandaExpress: Brand = {
  id: 'pandaExpress',
  match: /^Panda Express$/,
  pole: 'tall',
  color: '#d02030',
  sign: panel('brand_pandaExpress', {
    bg: '#d02030',
    ink: '#ffffff',
    text: 'PANDA EXPRESS',
    sub: 'GOURMET CHINESE FOOD',
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
