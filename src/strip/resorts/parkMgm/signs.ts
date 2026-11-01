import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';

/** PARK MGM in clean white capitals, the 2018 rebrand of the Monte Carlo. */
export const parkCrown: SignSpec = {
  name: 'parkCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'PARK MGM', w / 2, h * 0.55, w * 0.92, (p) => `500 ${p}px ${GROTESK}`, h * 0.7, '#ffffff');
  },
};
