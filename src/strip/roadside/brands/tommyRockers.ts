import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tommy Rocker’s mojo bar and grill. */
export const tommyRockers: Brand = {
  id: 'tommyRockers',
  match: /^Tommy Rocker/,
  pole: 'tall',
  color: '#0a3a7a',
  free: true,
  sign: panel('brand_tommyRockers', {
    bg: '#0a3a7a',
    ink: '#ffcc33',
    text: "TOMMY ROCKER'S",
    sub: 'MOJO BAR & GRILL',
    trim: '#e8202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
