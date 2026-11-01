import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** Arizona Charlie’s Decatur in neon across the top of the tower. */
export const arizonaCharliesName: SignSpec = {
  name: 'arizonaCharliesName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, "ARIZONA CHARLIE'S", w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#ffdd44');
  },
};
