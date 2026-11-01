import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, DECO, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** SAHARA in wide gold deco capitals on the towers and the corner marquee. */
export const saharaCrown: SignSpec = {
  name: 'saharaCrown',
  w: 1024,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'SAHARA', w / 2, h * 0.56, w * 0.9, (p) => `${p}px ${DECO}`, h * 0.74, '#ffd27a');
  },
};

export const saharaLED: SignSpec = {
  name: 'saharaLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#2a1606', '#b0702a'], head: 'SAHARA', sub: 'LAS VEGAS', font: (p) => `${p}px ${DECO}`, ink: '#fff0c8' },
      { bg: ['#0a0a0a', '#5a1a1a'], head: 'BAZAAR MEAT', sub: 'BY JOSÉ ANDRÉS', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#1a0a2a', '#7a2a6a'], head: 'MAGIC MIKE LIVE', sub: 'THE SAHARA THEATER', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#06202a', '#1a7a8a'], head: 'AZIZI POOL', sub: 'SINCE 1952', font: (p) => `${p}px ${DECO}` },
    ]);
  },
};
