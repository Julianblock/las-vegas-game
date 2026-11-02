import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Tacos on the corner by Container Park. */
export const pinchesTacos: Bar = {
  sign: neonPanel('fe_pinchesTacos', {
    text: 'Pinches Tacos',
    color: '#7aff5a',
    sub: 'TACOS · TEQUILA',
    subColor: '#ff3a2a',
  }),
  s: 242,
  side: 1,
};
