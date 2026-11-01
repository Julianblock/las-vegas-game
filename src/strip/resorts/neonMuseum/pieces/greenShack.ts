import { FX } from '../../../../world/builders';
import { neon, SANS } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Green Shack, the fried-chicken roadhouse on Fremont from 1929. */
export const greenShack: Piece = {
  sign: {
    name: 'boneGreenShack',
    w: 512,
    h: 192,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#2a5a2a';
      g.fillRect(0, 0, w, h);
      neon(g, 'GREEN SHACK', w / 2, h * 0.58, w * 0.88, (p) => `900 ${p}px ${SANS}`, h * 0.42, '#f2f2c0');
      rust(g, w, h, 89, 45);
    },
  },
  build(k, fr) {
    posts(k, fr, 16, -12, 6.93, 0.6, 3.0);
    k.sign(fr, 'boneGreenShack', 16, 1.9, -12, 2.6, 0.2, FX.NEON, 3.0);
  },
};
