import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** LAS VEGAS CONVENTION CENTER across the halls facing Paradise Road. */
export const lvccName: SignSpec = {
  name: 'lvccName',
  w: 1024,
  h: 112,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'LAS VEGAS CONVENTION CENTER', w / 2, h * 0.56, w * 0.96, (p) => `800 ${p}px ${GROTESK}`, h * 0.66, '#e8f4ff');
  },
};
