import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tire Xpress, a Las Vegas tyre and brake chain. */
export const tireXpress: Brand = {
  id: 'tireXpress',
  match: /^Tire Xpress/,
  pole: 'tall',
  color: '#111111',
  sign: panel('brand_tireXpress', {
    bg: '#111111',
    ink: '#ffd200',
    text: 'TIRE XPRESS',
    sub: 'TIRES · BRAKES · WHEELS',
    trim: '#ffd200',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
