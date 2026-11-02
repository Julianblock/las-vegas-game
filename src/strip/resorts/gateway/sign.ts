import { neon, type SignSpec } from '../../../world/signKit';
import { DECO } from '../../paint/fonts';

/** LAS VEGAS hung from the crown of the arches. */
export const gatewaySign: SignSpec = {
  name: 'gatewaySign',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'LAS VEGAS', w / 2, h * 0.56, w * 0.94, (p) => `700 ${p}px ${DECO}`, h * 0.66, '#ffffff');
  },
};
