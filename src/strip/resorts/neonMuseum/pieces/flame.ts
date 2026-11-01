import { FX } from '../../../../world/builders';
import { neon, SANS } from '../../../../world/signKit';
import { flames } from '../motifs';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Flame, a steakhouse sign of the 1960s, with its fire. */
export const flame: Piece = {
  sign: {
    name: 'boneFlame',
    w: 512,
    h: 320,
    cutout: true,
    draw(g, w, h) {
      flames(g, w / 2, h * 0.5, h * 0.4);
      neon(g, 'THE FLAME', w / 2, h * 0.82, w * 0.8, (p) => `900 ${p}px ${SANS}`, h * 0.2, '#ffffff');
    },
  },
  build(k, fr) {
    posts(k, fr, 20, -24, 6.4, 1, 3.0);
    k.sign(fr, 'boneFlame', 20, 3.0, -24, 4, 0.6, FX.NEON, 3.0);
  },
};
