import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';

/** WESTGATE in tall red capitals across the tower wings. */
export const westgateCrown: SignSpec = {
  name: 'westgateCrown',
  w: 1024,
  h: 176,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'WESTGATE', w / 2, h * 0.56, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.78, '#ff3a2a');
  },
};
