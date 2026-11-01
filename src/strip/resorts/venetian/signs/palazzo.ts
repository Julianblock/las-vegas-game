import type { SignSpec } from '../../../../world/signKit';
import { ROMAN } from '../../../paint/fonts';
import { letters } from '../../../paint/letters';

/** The Palazzo's crown lettering. */
export const palazzoCrown: SignSpec = {
  name: 'palazzoCrown',
  w: 1024,
  h: 128,
  cutout: true,
  draw(g, w, h) {
    letters(g, 'THE PALAZZO', w, h, (p) => `600 ${p}px ${ROMAN}`, '#fbe6c0', '#7a5a2a', '#ffe8c0');
  },
};
