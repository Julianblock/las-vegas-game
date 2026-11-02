import { SCRIPT } from '../../../../world/signKit';
import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** A boutique in an old storefront. */
export const coterie: Bar = {
  sign: neonPanel('fe_coterie', {
    text: 'Coterie',
    color: '#ff8ac8',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
  s: 56,
  side: 1,
};
