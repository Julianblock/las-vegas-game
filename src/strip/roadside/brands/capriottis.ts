import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Capriotti’s, the Delaware sub shop that moved its headquarters to Las Vegas. */
export const capriottis: Brand = {
  id: 'capriottis',
  match: /^Capriotti/,
  pole: 'monument',
  color: '#c8202a',
  sign: panel('brand_capriottis', {
    bg: '#ffffff',
    ink: '#c8202a',
    text: "Capriotti's",
    sub: 'SANDWICH SHOP',
    trim: '#1a5a2a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
