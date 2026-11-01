import { FX } from '../../../../world/builders';
import { GROTESK } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** SAHARA in red on a cream panel, from the old Sahara’s 1960s pylon. */
export const sahara: Piece = {
  sign: {
    name: 'boneSahara',
    w: 768,
    h: 224,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#e8dcc0';
      g.fillRect(0, 0, w, h);
      rust(g, w, h, 23, 50);
      neon(g, 'SAHARA', w / 2, h * 0.56, w * 0.88, (p) => `900 ${p}px ${GROTESK}`, h * 0.62, '#e8202a');
    },
  },
  build(k, fr) {
    posts(k, fr, 8, 24, 15.43, 0.6, 3.0);
    k.sign(fr, 'boneSahara', 8, 2.85, 24, 4.5, 0.3, FX.NEON, 3.0);
  },
};
