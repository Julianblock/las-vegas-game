import { neon, type SignSpec } from '../../../world/signKit';
import { BRUSH, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** The red Virgin signature on the tower. */
export const virginCrown: SignSpec = {
  name: 'virginCrown',
  w: 768,
  h: 256,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'Virgin', w / 2, h * 0.55, w * 0.9, (p) => `bold ${p}px ${BRUSH}`, h * 0.78, '#ff1a2a');
  },
};
