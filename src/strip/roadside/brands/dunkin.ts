import { ROUND } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Pink on orange in rounded capitals. */
export const dunkin: Brand = {
  id: 'dunkin',
  match: /^Dunkin'?$/,
  pole: 'monument',
  color: '#ff671f',
  sign: panel('brand_dunkin', {
    bg: '#ff671f',
    ink: '#da1884',
    text: "DUNKIN'",
    font: (p) => `900 ${p}px ${ROUND}`,
  }),
};
