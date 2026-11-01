import { FX } from '../../../../world/builders';
import { GROTESK } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import { shamrock } from '../motifs';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** Fitzgeralds, green and Irish, before the hotel became the D. */
export const fitzgeralds: Piece = {
  sign: {
    name: 'boneFitzgeralds',
    w: 768,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      shamrock(g, w * 0.1, h * 0.5, h * 0.3);
      neon(g, 'FITZGERALDS', w * 0.56, h * 0.58, w * 0.8, (p) => `900 ${p}px ${GROTESK}`, h * 0.46, '#5aff6a');
      rust(g, w, h, 83, 25);
    },
  },
  build(k, fr) {
    posts(k, fr, 4, -4, 12.0, 0.8, 3.3);
    k.sign(fr, 'boneFitzgeralds', 4, 2.8, -4, 4, 0.5, FX.NEON, 3.3);
  },
};
