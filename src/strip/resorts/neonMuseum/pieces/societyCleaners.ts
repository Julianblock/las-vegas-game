import { FX } from '../../../../world/builders';
import { BRUSH } from '../../../paint/fonts';
import { neon, SANS } from '../../../../world/signKit';
import { rust } from '../paint';
import type { Piece } from '../piece';
import { posts } from '../post';

/** Society Cleaners, a dry cleaner’s sign with a top hat. */
export const societyCleaners: Piece = {
  sign: {
    name: 'boneSocietyCleaners',
    w: 512,
    h: 256,
    cutout: true,
    draw(g, w, h) {
      g.fillStyle = '#e8e0d0';
      g.fillRect(0, h * 0.2, w, h * 0.6);
      neon(g, 'Society', w / 2, h * 0.42, w * 0.7, (p) => `${p}px ${BRUSH}`, h * 0.34, '#2a4ab0');
      neon(g, 'CLEANERS', w / 2, h * 0.7, w * 0.7, (p) => `900 ${p}px ${SANS}`, h * 0.18, '#e8202a');
      rust(g, w, h, 97, 35);
    },
  },
  build(k, fr) {
    posts(k, fr, -4, -12, 6.0, 1, 3.4);
    k.sign(fr, 'boneSocietyCleaners', -4, 2.5, -12, 3, 0.3, FX.NEON, 3.4);
  },
};
