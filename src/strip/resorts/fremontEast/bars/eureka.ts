import type { Bar } from '../bar';
import { neonPanel } from '../neonPanel';

/** Craft burgers and whiskey. */
export const eureka: Bar = {
  sign: neonPanel('fe_eureka', {
    text: 'EUREKA!',
    color: '#ffb040',
    sub: 'BURGERS · WHISKEY',
  }),
  s: 89,
  side: -1,
};
