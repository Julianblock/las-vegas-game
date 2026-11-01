import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** The D Las Vegas in neon across the top of the tower. */
export const theDName: SignSpec = {
  name: 'theDName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'the D', w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#ff2a2a');
  },
};
