import { FX } from '../../../../world/builders';
import { BRUSH } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import type { Piece } from '../piece';
import { posts } from '../post';

/** Liberace’s signature, from his museum on Tropicana. */
export const liberace: Piece = {
  sign: {
    name: 'boneLiberace',
    w: 768,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'Liberace', w / 2, h * 0.6, w * 0.86, (p) => `${p}px ${BRUSH}`, h * 0.74, '#ffe08a');
    },
  },
  build(k, fr) {
    posts(k, fr, -8, -24, 10.5, 1.4, 3.3);
    k.sign(fr, 'boneLiberace', -8, 3.15, -24, 3.5, 0.7, FX.NEON, 3.3);
  },
};
