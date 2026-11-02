import { SERIF } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A dim bar with fire pits shaped like stone cauldrons. */
export const griffin: Bar = {
  sign: neonPanel('fe_griffin', {
    text: 'The Griffin',
    color: '#ffb040',
    font: (p) => `italic bold ${p}px ${SERIF}`,
  }),
  s: 44,
  side: 1,
};
