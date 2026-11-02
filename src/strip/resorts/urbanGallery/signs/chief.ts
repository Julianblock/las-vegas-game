import { neon, SANS } from '../../../../world/signKit';
import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { tube } from '../tube';

/** The Chief Hotel Court (1940): a war-bonnet profile over the name. */
export const chiefSign: SignSpec = {
  name: 'galleryChief',
  w: 384,
  h: 512,
  cutout: true,
  draw(g, w, h) {
    tube(g, [190, 120, 230, 150, 236, 200, 252, 220, 236, 232, 240, 262, 214, 290, 170, 296, 150, 250, 150, 170, 190, 120], '#ffb070', 8, true);
    for (let i = 0; i < 9; i++) {
      const a = Math.PI * (0.65 + i * 0.09);
      const x0 = 180 + Math.cos(a) * 60, y0 = 190 - Math.sin(a) * 60;
      tube(g, [x0, y0, x0 + Math.cos(a) * 70, y0 - Math.sin(a) * 70], i % 2 ? '#ff3a2a' : '#ffffff', 7);
    }
    tube(g, [150, 250, 120, 330, 110, 400], '#ffd040', 7);
    neon(g, 'CHIEF', w / 2, h * 0.84, w * 0.8, (p) => `900 ${p}px ${SANS}`, h * 0.13, '#ff3a2a');
    neon(g, 'HOTEL COURT', w / 2, h * 0.95, w * 0.86, (p) => `700 ${p}px ${SANS}`, h * 0.07, '#40e0ff');
  },
};

export const CHIEF: Mount = { name: 'galleryChief', x: 4641, z: -6286, deg: 207, h: 6, lift: 5 };
