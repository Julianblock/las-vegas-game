import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** Downtown Grand in neon across the top of the tower. */
export const downtownGrandName: SignSpec = {
  name: 'downtownGrandName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'DOWNTOWN GRAND', w / 2, h * 0.55, w * 0.92, (p) => `700 ${p}px ${GROTESK}`, h * 0.66, '#ffffff');
  },
};
