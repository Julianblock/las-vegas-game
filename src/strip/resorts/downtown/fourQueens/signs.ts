import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** Four Queens in neon across the top of the tower. */
export const fourQueensName: SignSpec = {
  name: 'fourQueensName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'FOUR QUEENS', w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#ff2a4a');
  },
};
