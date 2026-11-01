import { FX } from '../../../../world/builders';
import { ROMAN } from '../../../paint/fonts';
import { neon } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** Caesars Palace in Roman capitals, gold on black. */
export const caesars: Piece = {
  sign: {
    name: 'boneCaesars',
    w: 768,
    h: 192,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#141414';
      g.fillRect(0, 0, w, h);
      neon(g, 'CAESARS PALACE', w / 2, h * 0.58, w * 0.9, (p) => `${p}px ${ROMAN}`, h * 0.5, '#e8c46a');
      rust(g, w, h, 61, 20);
    },
  },
  build(k, fr) {
    posts(k, fr, 6, 10, 12.0, 0.4, 3.6);
    k.sign(fr, 'boneCaesars', 6, 1.9, 10, 3, 0.3, FX.NEON, 3.6);
  },
};
