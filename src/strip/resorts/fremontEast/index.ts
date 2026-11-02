import { FX } from '../../../world/builders';
import type { Resort } from '../../resort';
import { BARS } from './bars';
import { facadeFrame } from './street';

/** Fremont East: the bars and diners between the boulevard and 8th, each with a neon blade sign. */
export const fremontEast: Resort = {
  id: 'fremontEast',
  name: 'Fremont East',
  signs: BARS.map((b) => b.sign),
  build: (k) => {
    for (const b of BARS) {
      const fr = facadeFrame(k, b.s, b.side);
      k.box(fr, 0, 4.2, -0.6, 0.15, 0.15, 1.4, '#2a2a2e', { rough: 0.5 });
      k.sign(fr, b.sign.name, 0, 4.2 - 0.9, 0.1, 1.6, 1.5, FX.NEON, Math.PI / 2, true);
    }
  },
};
