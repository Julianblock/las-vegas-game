import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Pei Wei. */
export const peiWei: Brand = {
  id: 'peiWei',
  match: /^Pei Wei/,
  pole: 'monument',
  color: '#c8102e',
  sign: panel('brand_peiWei', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: 'PEI WEI',
    sub: 'ASIAN KITCHEN',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
