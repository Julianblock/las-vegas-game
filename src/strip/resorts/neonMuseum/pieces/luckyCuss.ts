import { FX } from '../../../../world/builders';
import { SLAB } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Lucky Cuss Motel’s prospector. */
export const luckyCuss: Piece = {
  sign: {
    name: 'boneLuckyCuss',
    w: 512,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#5a3a1a';
      g.fillRect(0, 0, w, h);
      neon(g, 'LUCKY CUSS', w / 2, h * 0.42, w * 0.86, (p) => `bold ${p}px ${SLAB}`, h * 0.3, '#ffd27a');
      neon(g, 'MOTEL', w / 2, h * 0.76, w * 0.5, (p) => `bold ${p}px ${SLAB}`, h * 0.2, '#ff8a3a');
      rust(g, w, h, 101, 40);
    },
  },
  build(k, fr) {
    posts(k, fr, -16, -16, 6.0, 1.2, 3.6);
    k.sign(fr, 'boneLuckyCuss', -16, 2.7, -16, 3, 0.4, FX.NEON, 3.6);
  },
};
