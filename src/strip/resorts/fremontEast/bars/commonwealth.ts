import { SERIF } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A Victorian bar with a rooftop deck and a speakeasy behind it. */
export const commonwealth: Bar = {
  sign: neonPanel('fe_commonwealth', {
    text: 'Commonwealth',
    color: '#ffd8a0',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
  s: 92,
  side: 1,
};
