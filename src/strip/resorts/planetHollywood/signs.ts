import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';

/** PLANET HOLLYWOOD in white capitals with an electric-blue halo. */
export const phCrown: SignSpec = {
  name: 'phCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'PLANET HOLLYWOOD', w / 2, h * 0.56, w * 0.94, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#7ab8ff');
  },
};
