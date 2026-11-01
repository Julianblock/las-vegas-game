import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK, ROMAN } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** MGM GRAND in gold capitals across the emerald tower's wing. */
export const mgmCrown: SignSpec = {
  name: 'mgmCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'MGM GRAND', w / 2, h * 0.55, w * 0.92, (p) => `bold ${p}px ${ROMAN}`, h * 0.72, '#ffd86a');
  },
};

/** The corner marquee, the Strip's biggest screen when it went up. */
export const mgmLED: SignSpec = {
  name: 'mgmLED',
  w: 640,
  h: 352,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#022a14', '#0a7a3a'], head: 'MGM GRAND', sub: 'THE CITY OF ENTERTAINMENT', font: (p) => `bold ${p}px ${ROMAN}`, ink: '#ffd86a' },
      { bg: ['#1a0a0a', '#8a1a1a'], head: 'KÀ', sub: 'CIRQUE DU SOLEIL', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#0a0a1a', '#2a2a6a'], head: 'DAVID COPPERFIELD', sub: 'NIGHTLY', font: (p) => `bold ${p}px ${ROMAN}` },
      { bg: ['#000000', '#3a3a3a'], head: 'UFC FIGHT NIGHT', sub: 'MGM GRAND GARDEN ARENA', font: (p) => `900 italic ${p}px ${GROTESK}`, ink: '#ff2a2a' },
      { bg: ['#0a1a0a', '#1a4a1a'], head: 'WET REPUBLIC', sub: 'ULTRA POOL', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
