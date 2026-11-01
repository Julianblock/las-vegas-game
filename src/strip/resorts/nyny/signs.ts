import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, DECO, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** NEW YORK - NEW YORK in red deco capitals over the Strip entrance. */
export const nynyCrown: SignSpec = {
  name: 'nynyCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'NEW YORK • NEW YORK', w / 2, h * 0.55, w * 0.94, (p) => `bold ${p}px ${DECO}`, h * 0.62, '#ff2a2a');
  },
};

export const nynyLED: SignSpec = {
  name: 'nynyLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#0a0a2a', '#2a2a8a'], head: 'NEW YORK-NEW YORK', sub: 'HOTEL & CASINO', font: (p) => `bold ${p}px ${DECO}` },
      { bg: ['#2a0a0a', '#9a1a1a'], head: 'THE BIG APPLE COASTER', sub: '67 MPH · 144-FT DROP', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#ffe23a' },
      { bg: ['#1a1a1a', '#4a4a4a'], head: 'MJ LIVE', sub: 'NIGHTLY · ZOUK THEATER', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#0a1a0a', '#1a5a2a'], head: 'NINE FINE IRISHMEN', sub: 'PUB · LIVE MUSIC', font: (p) => `bold ${p}px ${CONDENSED}` },
    ]);
  },
};
