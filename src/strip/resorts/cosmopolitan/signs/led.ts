import type { SignSpec } from '../../../../world/signKit';
import { DIDONE, GROTESK } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The Strip marquee: tall screens of fashion-film imagery, one brand line at a time. */
export const cosmoLED: SignSpec = {
  name: 'cosmoLED',
  w: 320,
  h: 640,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#0a0a0a', '#5a1a6a'], head: 'THE', sub: 'COSMOPOLITAN', font: (p) => `300 ${p}px ${GROTESK}` },
      { bg: ['#1a0a2a', '#ff3a8a'], head: 'Just the', sub: 'RIGHT AMOUNT OF WRONG', font: (p) => `italic ${p}px ${DIDONE}` },
      { bg: ['#0a1a2a', '#3a8aff'], head: 'MARQUEE', sub: 'NIGHTCLUB & DAYCLUB', font: (p) => `bold ${p}px ${GROTESK}` },
      { bg: ['#2a0a0a', '#ff8a2a'], head: 'Chandelier', sub: 'THREE STOREYS OF CRYSTAL', font: (p) => `italic ${p}px ${DIDONE}` },
      { bg: ['#000000', '#ff6a00'], head: 'BOO', sub: 'HALLOWEEN AT MARQUEE', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
