import type { SignSpec } from '../../../../world/signKit';
import { ROMAN } from '../../../paint/fonts';
import { letters } from '../../../paint/letters';

/** Gold Roman capitals across the Venetian tower's crown. */
export const venetianCrown: SignSpec = {
  name: 'venetianCrown',
  w: 1024,
  h: 128,
  cutout: true,
  draw(g, w, h) {
    letters(g, 'THE VENETIAN', w, h, (p) => `600 ${p}px ${ROMAN}`, '#f2d48c', '#6a4a14', '#ffe2a0');
  },
};
