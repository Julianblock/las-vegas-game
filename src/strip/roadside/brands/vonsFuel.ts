import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Vons fuel. */
export const vonsFuel: Brand = {
  id: 'vonsFuel',
  match: /^(Vons|Safeway)/,
  pole: 'fuel',
  color: '#c8102e',
  sign: panel('brand_vonsFuel', {
    bg: '#ffffff',
    ink: '#c8102e',
    text: 'VONS',
    sub: 'FUEL',
    trim: '#c8102e',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
