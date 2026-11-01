import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, DECO, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** WESTGATE in tall red capitals across the tower wings. */
export const westgateCrown: SignSpec = {
  name: 'westgateCrown',
  w: 1024,
  h: 176,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'WESTGATE', w / 2, h * 0.56, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.78, '#ff3a2a');
  },
};

/** The giant Paradise Road marquee. */
export const westgateLED: SignSpec = {
  name: 'westgateLED',
  w: 640,
  h: 352,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#2a0606', '#b02020'], head: 'WESTGATE', sub: 'LAS VEGAS RESORT & CASINO', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#06122a', '#1a4a8a'], head: 'SUPERBOOK', sub: 'THE WORLD\u2019S LARGEST SPORTSBOOK', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#1a1206', '#8a6a1a'], head: 'ELVIS', sub: '837 SOLD-OUT SHOWS · 1969\u20131976', font: (p) => `${p}px ${DECO}`, ink: '#ffe7a0' },
      { bg: ['#120a1a', '#5a2a7a'], head: 'INTERNATIONAL', sub: 'THEATER', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#0a0a0a', '#a04a10'], head: 'HAPPY HALLOWEEN', sub: 'FROM THE KING', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#ffb030' },
    ]);
  },
};
