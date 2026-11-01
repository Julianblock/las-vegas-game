import { FX } from '../../../../world/builders';
import { BRUSH } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Moulin Rouge’s pink script (1955), from the first integrated casino in town. */
export const moulinRouge: Piece = {
  sign: {
    name: 'boneMoulinRouge',
    w: 768,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'Moulin Rouge', w / 2, h * 0.58, w * 0.92, (p) => `${p}px ${BRUSH}`, h * 0.7, '#ff4aa0');
    },
  },
  build(k, fr) {
    posts(k, fr, -6, 26, 15.0, 1.5, 3.3);
    k.sign(fr, 'boneMoulinRouge', -6, 4.0, 26, 5, 0.8, FX.NEON, 3.3);
  },
};
