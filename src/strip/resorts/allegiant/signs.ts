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

/** The silver-and-black RAIDERS lettering over the lanai doors. */
export const raidersWord: SignSpec = {
  name: 'raidersWord',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'RAIDERS', w / 2, h * 0.56, w * 0.9, (p) => `900 ${p}px ${GROTESK}`, h * 0.78, '#c8ccd2');
  },
};
