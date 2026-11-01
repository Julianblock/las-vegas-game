import { FX } from '../../../../world/builders';
import { neon, SANS, SERIF } from '../../../../world/signKit';
import { rust, bulbPanel } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** The Golden Nugget’s gambling hall marquee from the 1950s. */
export const goldenNugget: Piece = {
  sign: {
    name: 'boneGoldenNugget',
    w: 768,
    h: 320,
    cutout: true,
    draw(g, w, h) {
      bulbPanel(g, 0, 0, w, h, '#3a2a10', 53);
      neon(g, 'GOLDEN NUGGET', w / 2, h * 0.42, w * 0.84, (p) => `bold ${p}px ${SERIF}`, h * 0.26, '#ffd25a');
      neon(g, 'GAMBLING HALL', w / 2, h * 0.74, w * 0.7, (p) => `bold ${p}px ${SANS}`, h * 0.16, '#ffffff');
      rust(g, w, h, 59, 40);
    },
  },
  build(k, fr) {
    posts(k, fr, -8, 12, 10.8, 0.8, 3.1);
    k.sign(fr, 'boneGoldenNugget', -8, 3.05, 12, 4.5, 0.5, FX.NEON, 3.1);
  },
};
