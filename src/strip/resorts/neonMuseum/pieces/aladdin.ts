import { FX } from '../../../../world/builders';
import { DECO } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import type { Piece } from '../piece';
import { posts } from '../post';

/** ALADDIN in Arabian Nights lettering, from the hotel Elvis married in. */
export const aladdin: Piece = {
  sign: {
    name: 'boneAladdin',
    w: 768,
    h: 224,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'ALADDIN', w / 2, h * 0.58, w * 0.88, (p) => `700 ${p}px ${DECO}`, h * 0.64, '#ffb03a');
    },
  },
  build(k, fr) {
    posts(k, fr, 10, -20, 13.71, 2, 3.2);
    k.sign(fr, 'boneAladdin', 10, 4.0, -20, 4, 0.6, FX.NEON, 3.2);
  },
};
