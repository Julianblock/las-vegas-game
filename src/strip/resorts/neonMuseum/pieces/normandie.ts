import { FX } from '../../../../world/builders';
import { neon, SANS } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Normandie Motel, where Elvis is said to have stayed. */
export const normandie: Piece = {
  sign: {
    name: 'boneNormandie',
    w: 512,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#1a2a5a';
      g.fillRect(0, 0, w, h);
      neon(g, 'NORMANDIE', w / 2, h * 0.4, w * 0.86, (p) => `900 ${p}px ${SANS}`, h * 0.3, '#ffffff');
      neon(g, 'MOTEL', w / 2, h * 0.75, w * 0.5, (p) => `700 ${p}px ${SANS}`, h * 0.22, '#ff5a5a');
      rust(g, w, h, 71, 40);
    },
  },
  build(k, fr) {
    posts(k, fr, -22, -4, 6.4, 1.4, 3.5);
    k.sign(fr, 'boneNormandie', -22, 3.0, -4, 3.2, 0.4, FX.NEON, 3.5);
  },
};
