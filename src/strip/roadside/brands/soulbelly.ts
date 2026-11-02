import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Barbecue with a stage out back. */
export const soulbelly: Brand = {
  id: 'soulbelly',
  match: /^Soulbelly BBQ$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_soulbelly', {
    bg: '#1a1a1a',
    ink: '#ffb040',
    text: 'Soulbelly',
    sub: 'BBQ',
    trim: '#ff3a2a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
