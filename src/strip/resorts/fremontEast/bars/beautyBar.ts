import { SCRIPT } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A 1950s beauty salon refitted as a bar, hair dryers and all. */
export const beautyBar: Bar = {
  sign: neonPanel('fe_beautyBar', {
    text: 'Beauty Bar',
    color: '#ff4ab8',
    sub: 'MARTINIS · MANICURES',
    subColor: '#40e0ff',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
  s: 65,
  side: 1,
};
