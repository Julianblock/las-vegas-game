import { SCRIPT } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A piano bar where the waiters take turns at the microphone. */
export const dontTellMama: Bar = {
  sign: neonPanel('fe_dontTellMama', {
    text: 'Don\'t Tell Mama',
    color: '#ff5aa8',
    sub: 'PIANO BAR',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
  s: 73,
  side: 1,
};
