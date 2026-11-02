import { SCRIPT } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A patio bar with garden gnomes and a giant birdcage. */
export const parkOnFremont: Bar = {
  sign: neonPanel('fe_parkOnFremont', {
    text: 'Park on Fremont',
    color: '#7aff5a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
  s: 35,
  side: -1,
};
