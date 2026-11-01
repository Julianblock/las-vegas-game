import type { SignSpec } from '../../../../world/signKit';
import { CONDENSED, DIDONE, SLAB } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The Strip marquee's rotation. */
export const tiLED: SignSpec = {
  name: 'tiLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#3a0606', '#9a1a12'], head: 'TI', sub: 'TREASURE ISLAND', font: (p) => `bold ${p}px ${DIDONE}`, ink: '#ffd890' },
      { bg: ['#06102a', '#1a3a7a'], head: 'Mystère', sub: 'CIRQUE DU SOLEIL', font: (p) => `italic 600 ${p}px ${DIDONE}` },
      { bg: ['#1a0e04', '#6a3a12'], head: 'GILLEY’S', sub: 'SALOON · DANCE HALL · BBQ', font: (p) => `900 ${p}px ${SLAB}`, ink: '#ffcc66' },
      { bg: ['#041a1a', '#0e5a5a'], head: 'SIRENS’ COVE', sub: 'FREE · ON THE STRIP', font: (p) => `bold ${p}px ${CONDENSED}` },
    ]);
  },
};
