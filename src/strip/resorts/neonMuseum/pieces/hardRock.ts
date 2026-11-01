import { FX } from '../../../../world/builders';
import { BRUSH } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Hard Rock Cafe’s guitar neck lettering. */
export const hardRock: Piece = {
  sign: {
    name: 'boneHardRock',
    w: 768,
    h: 224,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'Hard Rock', w / 2, h * 0.6, w * 0.86, (p) => `${p}px ${BRUSH}`, h * 0.72, '#ff7a2a');
    },
  },
  build(k, fr) {
    posts(k, fr, 0, 4, 11.66, 2.4, 3.5);
    k.sign(fr, 'boneHardRock', 0, 4.1, 4, 3.4, 0.6, FX.NEON, 3.5);
  },
};
