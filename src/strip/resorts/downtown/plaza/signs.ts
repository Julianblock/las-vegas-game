import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** Plaza Hotel & Casino in neon across the top of the tower. */
export const plazaName: SignSpec = {
  name: 'plazaName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'PLAZA', w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#7cff6a');
  },
};
