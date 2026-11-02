import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Cajun seafood by the bag. */
export const boilingCrab: Brand = {
  id: 'boilingCrab',
  match: /^The Boiling Crab$/,
  pole: 'tall',
  color: '#5a1a1a',
  sign: panel('brand_boilingCrab', {
    bg: '#c81a1a',
    ink: '#ffffff',
    text: 'Boiling Crab',
    sub: 'CAJUN SEAFOOD',
    trim: '#ffd400',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
