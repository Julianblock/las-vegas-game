import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** A neighbourhood video-poker tavern on the Flamingo-Decatur corner. */
export const parkwayTavern: Brand = {
  id: 'parkwayTavern',
  match: /^Parkway Tavern$/,
  pole: 'monument',
  color: '#1a3a1a',
  sign: panel('brand_parkwayTavern', {
    bg: '#0f3a20',
    ink: '#ffd27a',
    text: 'PARKWAY',
    sub: 'TAVERN · GAMING',
    trim: '#ffd27a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
