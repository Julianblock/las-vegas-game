import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';

/** Vdara's thin white wordmark, spaced wide, at the top of the crescents. */
export const vdaraWord: SignSpec = {
  name: 'vdaraWord',
  w: 768,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'V D A R A', w / 2, h * 0.55, w * 0.9, (p) => `300 ${p}px ${GROTESK}`, h * 0.7, '#f4f8ff');
  },
};
