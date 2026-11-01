import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Zia Record Exchange. */
export const zia: Brand = {
  id: 'zia',
  match: /^ZIA Record/i,
  pole: 'tall',
  color: '#111111',
  free: true,
  sign: panel('brand_zia', {
    bg: '#e8202a',
    ink: '#ffffff',
    text: 'ZIA',
    sub: 'RECORD EXCHANGE',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
