import { neon, SANS, SCRIPT } from '../../../../world/signKit';
import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { tube } from '../tube';

/** The Bow & Arrow Motel (1950s): a red arrow shot through the name. */
export const bowAndArrowSign: SignSpec = {
  name: 'galleryBowArrow',
  w: 512,
  h: 384,
  cutout: true,
  draw(g, w, h) {
    tube(g, [120, 40, 70, 190, 120, 340], '#ffd040', 10);
    tube(g, [120, 40, 120, 340], '#ffffff', 4);
    tube(g, [40, 190, 470, 190], '#ff3a2a', 10);
    tube(g, [470, 190, 430, 160, 470, 190, 430, 220], '#ff3a2a', 10);
    tube(g, [40, 190, 20, 168, 40, 190, 20, 212], '#40e080', 8);
    neon(g, 'Bow & Arrow', w * 0.6, h * 0.36, w * 0.66, (p) => `${p}px ${SCRIPT}`, h * 0.2, '#40e0ff');
    neon(g, 'MOTEL', w * 0.6, h * 0.72, w * 0.5, (p) => `900 ${p}px ${SANS}`, h * 0.18, '#ff5aa8');
  },
};

export const BOW_AND_ARROW: Mount = { name: 'galleryBowArrow', x: 4562, z: -6128, deg: 207, h: 4.5, lift: 6 };
