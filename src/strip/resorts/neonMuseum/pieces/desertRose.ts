import { FX } from '../../../../world/builders';
import { BRUSH } from '../../../paint/fonts';
import { neon, SANS } from '../../../../world/signKit';
import { rose } from '../motifs';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Desert Rose Motel and its neon rose. */
export const desertRose: Piece = {
  sign: {
    name: 'boneDesertRose',
    w: 512,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      rose(g, w * 0.16, h * 0.5, h * 0.28);
      neon(g, 'Desert Rose', w * 0.6, h * 0.46, w * 0.7, (p) => `${p}px ${BRUSH}`, h * 0.4, '#ff6ab0');
      neon(g, 'MOTEL', w * 0.6, h * 0.82, w * 0.4, (p) => `700 ${p}px ${SANS}`, h * 0.16, '#7ad0ff');
    },
  },
  build(k, fr) {
    posts(k, fr, -10, -2, 7.2, 1.2, 3.2);
    k.sign(fr, 'boneDesertRose', -10, 3.0, -2, 3.6, 0.6, FX.NEON, 3.2);
  },
};
