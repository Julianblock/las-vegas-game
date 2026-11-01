import { FX } from '../../../../world/builders';
import { DECO } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import { starburst } from '../motifs';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Stardust’s atomic-age lettering (1958), each letter once taller than a man. */
export const stardust: Piece = {
  sign: {
    name: 'boneStardust',
    w: 768,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      starburst(g, w * 0.1, h * 0.35, h * 0.3, '#ffd27a');
      starburst(g, w * 0.92, h * 0.7, h * 0.22, '#7ad0ff');
      neon(g, 'Stardust', w * 0.52, h * 0.58, w * 0.8, (p) => `700 ${p}px ${DECO}`, h * 0.62, '#ff5ad0');
      rust(g, w, h, 11, 25);
    },
  },
  build(k, fr) {
    posts(k, fr, -18, 22, 19.5, 1.2, 3.6);
    k.sign(fr, 'boneStardust', -18, 4.45, 22, 6.5, 0.6, FX.NEON, 3.6);
  },
};
