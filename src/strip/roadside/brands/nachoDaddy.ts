import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Nacho Daddy, a Las Vegas Mexican kitchen. */
export const nachoDaddy: Brand = {
  id: 'nachoDaddy',
  match: /^Nacho Daddy/,
  pole: 'monument',
  color: '#111111',
  free: true,
  sign: panel('brand_nachoDaddy', {
    bg: '#111111',
    ink: '#ffd200',
    text: 'NACHO DADDY',
    trim: '#d0202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
