import { FX } from '../../../../world/builders';
import { BRUSH } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Riviera’s red script, from the hotel imploded in 2016. */
export const riviera: Piece = {
  sign: {
    name: 'boneRiviera',
    w: 768,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'Riviera', w / 2, h * 0.6, w * 0.86, (p) => `${p}px ${BRUSH}`, h * 0.78, '#ff2a3a');
    },
  },
  build(k, fr) {
    posts(k, fr, 18, 2, 15.0, 1.6, 2.9);
    k.sign(fr, 'boneRiviera', 18, 4.1, 2, 5, 0.7, FX.NEON, 2.9);
  },
};
