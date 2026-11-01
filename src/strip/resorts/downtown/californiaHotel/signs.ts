import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** California Hotel & Casino in neon across the top of the tower. */
export const californiaHotelName: SignSpec = {
  name: 'californiaHotelName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'CALIFORNIA', w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#ff5a3a');
  },
};
