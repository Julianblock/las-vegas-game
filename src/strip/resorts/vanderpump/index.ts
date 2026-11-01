import { FX } from '../../../world/builders';
import { neon, type SignSpec } from '../../../world/signKit';
import type { Kit } from '../../kit';
import { DIDONE } from '../../paint/fonts';
import { palm } from '../../parts/palm';
import type { Resort } from '../../resort';

const SIGNS: SignSpec[] = [
  {
    name: 'vanderpumpCrown',
    w: 1024,
    h: 160,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'VANDERPUMP', w / 2, h * 0.52, w * 0.94, (p) => `500 ${p}px ${DIDONE}`, h * 0.7, '#f4b8c8');
    },
  },
];

/**
 * The Vanderpump Hotel (the Cromwell until 2025; Bill's Gamblin' Hall and the
 * Barbary Coast before that) on the northeast corner: an 11-storey boutique
 * tower over the casino with Drai's rooftop pool and nightclub on top.
 */
function build(k: Kit) {
  const fr = k.frame(1578, 102, 270);
  const top = k.slab(fr, 0, -30, 44, 32, 11, '#3a3632', 5, 0.6);
  k.box(fr, 0, top, -30, 46, 1.2, 34, '#1e1c1a', { rough: 0.5 });
  // Drai's: rooftop pool deck, cabanas and a glowing bar.
  k.box(fr, 6, top + 1.2, -32, 18, 0.4, 8, '#3aa0c8', { rough: 0.05, glow: 0.5 });
  k.box(fr, -16, top + 1.2, -30, 8, 3, 14, '#2a2420', { glow: 0.6 });
  for (let x = -20; x <= 20; x += 8) k.box(fr, x, top + 1.2, -18, 3, 2.6, 3, '#f2ece2', { rough: 0.8 });
  k.sign(fr, 'vanderpumpCrown', 0, top - 4, 2.6, 5, 1.4, FX.NEON);
  k.light(fr.p(6, top + 2, -32), 0.3, 0.8, 1, 5);
  k.storefront(fr, 0, -13.8, 44, 6, 1);
  k.box(fr, 0, 6, -12, 48, 1.2, 4, '#1a1816', { rough: 0.4, glow: 0.3 });
  palm(k, fr, -20, 2, 13, 1);
  palm(k, fr, 20, 2, 13, 2);
  k.gather(fr, 0, -6, 8, 12);
}

export const vanderpump: Resort = {
  id: 'vanderpump',
  name: 'The Vanderpump Hotel',
  signs: SIGNS,
  build,
};
