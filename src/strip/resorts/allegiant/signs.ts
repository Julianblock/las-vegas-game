import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';

/** ALLEGIANT STADIUM in white along the glass. */
export const allegiantName: SignSpec = {
  name: 'allegiantName',
  w: 1024,
  h: 128,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'ALLEGIANT STADIUM', w / 2, h * 0.56, w * 0.94, (p) => `800 ${p}px ${GROTESK}`, h * 0.7, '#ffffff');
  },
};
