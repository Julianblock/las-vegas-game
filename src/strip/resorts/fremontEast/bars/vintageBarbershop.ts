import { SCRIPT } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Straight-razor shaves. */
export const vintageBarbershop: Bar = {
  sign: neonPanel('fe_vintageBarbershop', {
    text: 'Barbershop',
    color: '#ff3a2a',
    sub: 'DOWNTOWN VINTAGE',
    subColor: '#40a0ff',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
  s: 737,
  side: 1,
};
