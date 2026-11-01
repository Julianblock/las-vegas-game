import { FX } from '../../../../world/builders';
import { neon, SERIF } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** Binion’s Horseshoe, the gambling hall’s horseshoe from Fremont Street. */
export const binions: Piece = {
  sign: {
    name: 'boneBinions',
    w: 512,
    h: 384,
    cutout: true,
    draw(g, w, h) {
      g.strokeStyle = '#ffd27a';
      g.lineWidth = h * 0.08;
      g.shadowColor = '#ffd27a';
      g.shadowBlur = 18;
      g.beginPath();
      g.arc(w / 2, h * 0.5, h * 0.36, Math.PI * 0.75, Math.PI * 2.25);
      g.stroke();
      g.shadowBlur = 0;
      neon(g, "BINION'S", w / 2, h * 0.5, w * 0.6, (p) => `bold ${p}px ${SERIF}`, h * 0.18, '#ff3a2a');
      rust(g, w, h, 41, 20);
    },
  },
  build(k, fr) {
    posts(k, fr, -20, 8, 6.67, 1, 3.3);
    k.sign(fr, 'boneBinions', -20, 3.5, 8, 5, 0.5, FX.NEON, 3.3);
  },
};
