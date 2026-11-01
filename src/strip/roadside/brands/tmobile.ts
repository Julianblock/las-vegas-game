import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** T-Mobile. */
export const tmobile: Brand = {
  id: 'tmobile',
  match: /^T-Mobile$/,
  pole: 'monument',
  color: '#e20074',
  sign: panel('brand_tmobile', {
    bg: '#e20074',
    ink: '#ffffff',
    text: 'T-Mobile',
    trim: '#ffffff',
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
