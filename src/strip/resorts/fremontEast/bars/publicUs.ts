import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Coffee and brunch in a converted house. */
export const publicUs: Bar = {
  sign: neonPanel('fe_publicUs', {
    text: 'PublicUs',
    color: '#ffffff',
    sub: 'COFFEE · KITCHEN',
  }),
  s: 787,
  side: 1,
};
