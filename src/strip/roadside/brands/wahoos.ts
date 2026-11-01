import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Surf-shack tacos at Flamingo and Valley View. */
export const wahoos: Brand = {
  id: 'wahoos',
  match: /^Wahoo's Fish Taco$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_wahoos', {
    bg: '#1a1a1a',
    ink: '#ffffff',
    text: "WAHOO'S",
    sub: 'FISH TACO',
    trim: '#ffd23a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
