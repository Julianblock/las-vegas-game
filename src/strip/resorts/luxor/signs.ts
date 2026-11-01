import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, ROMAN } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** LUXOR in spaced gold capitals on the obelisk and the porte-cochère. */
export const luxorCrown: SignSpec = {
  name: 'luxorCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'L U X O R', w / 2, h * 0.55, w * 0.92, (p) => `bold ${p}px ${ROMAN}`, h * 0.72, '#ffd86a');
  },
};

export const luxorLED: SignSpec = {
  name: 'luxorLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#0a0a0a', '#3a2a0a'], head: 'LUXOR', sub: 'HOTEL & CASINO', font: (p) => `bold ${p}px ${ROMAN}`, ink: '#ffd86a' },
      { bg: ['#0a0a2a', '#2a1a6a'], head: 'BLUE MAN GROUP', sub: 'NIGHTLY · LUXOR THEATER', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#4ab0ff' },
      { bg: ['#1a1a0a', '#5a4a1a'], head: 'TITANIC', sub: 'THE ARTIFACT EXHIBITION', font: (p) => `bold ${p}px ${ROMAN}` },
      { bg: ['#1a0a0a', '#6a1a1a'], head: 'CARROT TOP', sub: 'ATRIUM SHOWROOM', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#ff8a2a' },
    ]);
  },
};
