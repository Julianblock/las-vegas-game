import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Soyo, a Korean grill and noodle house. */
export const soyo: Brand = {
  id: 'soyo',
  match: /^Soyo/,
  pole: 'monument',
  color: '#0a2a4a',
  free: true,
  sign: panel('brand_soyo', {
    bg: '#0a2a4a',
    ink: '#ffffff',
    text: 'SOYO',
    sub: 'KOREAN BARSTRO',
    trim: '#e8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
