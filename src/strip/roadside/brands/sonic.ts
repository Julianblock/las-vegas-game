import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Sonic Drive-In. */
export const sonic: Brand = {
  id: 'sonic',
  match: /^Sonic/,
  pole: 'tall',
  color: '#0a5ab0',
  sign: panel('brand_sonic', {
    bg: '#0a5ab0',
    ink: '#ffffff',
    text: 'SONIC',
    sub: 'AMERICA’S DRIVE-IN',
    trim: '#e8202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
