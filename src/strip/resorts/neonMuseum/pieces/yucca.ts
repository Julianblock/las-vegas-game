import { FX } from '../../../../world/builders';
import { neon, SANS } from '../../../../world/signKit';
import { cactus } from '../motifs';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Yucca Motel, a cactus and a vacancy arrow. */
export const yucca: Piece = {
  sign: {
    name: 'boneYucca',
    w: 512,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#2a4a3a';
      g.fillRect(0, h * 0.1, w, h * 0.8);
      cactus(g, w * 0.14, h * 0.85, h * 0.6, '#5aff8a');
      neon(g, 'YUCCA', w * 0.6, h * 0.42, w * 0.65, (p) => `900 ${p}px ${SANS}`, h * 0.34, '#ffd27a');
      neon(g, 'MOTEL', w * 0.6, h * 0.74, w * 0.6, (p) => `700 ${p}px ${SANS}`, h * 0.22, '#ff5a3a');
      rust(g, w, h, 37, 30);
    },
  },
  build(k, fr) {
    posts(k, fr, 20, 14, 7.0, 1.8, 3.4);
    k.sign(fr, 'boneYucca', 20, 3.55, 14, 3.5, 0.5, FX.NEON, 3.4);
  },
};
