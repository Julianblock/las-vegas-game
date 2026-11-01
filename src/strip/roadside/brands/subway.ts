import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Yellow on green, usually the end unit of a strip mall. */
export const subway: Brand = {
  id: 'subway',
  match: /^Subway$/,
  pole: 'tall',
  color: '#008938',
  sign: panel('brand_subway', {
    bg: '#008938',
    ink: '#ffc20e',
    text: 'SUBWAY',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
