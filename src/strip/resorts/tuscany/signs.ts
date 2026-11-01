import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK, ROMAN } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** TUSCANY in gold Roman capitals. */
export const tuscanyCrown: SignSpec = {
  name: 'tuscanyCrown',
  w: 768,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'TUSCANY', w / 2, h * 0.55, w * 0.9, (p) => `600 ${p}px ${ROMAN}`, h * 0.72, '#f2c86a');
  },
};

export const tuscanyLED: SignSpec = {
  name: 'tuscanyLED',
  w: 640,
  h: 352,
  frames: 3,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#2a1a0a', '#8a4a1a'], head: 'TUSCANY', sub: 'SUITES & CASINO', font: (p) => `600 ${p}px ${ROMAN}`, ink: '#f2c86a' },
      { bg: ['#0a1a10', '#2a6a3a'], head: 'PUB 365', sub: '365 BEERS', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#1a0a0a', '#8a1a1a'], head: 'LOUNGE', sub: 'LIVE MUSIC NIGHTLY', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
