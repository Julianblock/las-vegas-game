import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** ARIA's thin spaced capitals in cool white, on both crescents' crowns. */
export const ariaCrown: SignSpec = {
  name: 'ariaCrown',
  w: 768,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'A R I A', w / 2, h * 0.55, w * 0.92, (p) => `200 ${p}px ${GROTESK}`, h * 0.78, '#e8f4ff');
  },
};

export const vdaraCrown: SignSpec = {
  name: 'vdaraCrown',
  w: 768,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'VDARA', w / 2, h * 0.55, w * 0.92, (p) => `200 ${p}px ${GROTESK}`, h * 0.7, '#e8f4ff');
  },
};
