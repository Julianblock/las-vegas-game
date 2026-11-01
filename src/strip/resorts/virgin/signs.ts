import { neon, type SignSpec } from '../../../world/signKit';
import { BRUSH, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** The red Virgin signature on the tower. */
export const virginCrown: SignSpec = {
  name: 'virginCrown',
  w: 768,
  h: 256,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'Virgin', w / 2, h * 0.55, w * 0.9, (p) => `bold ${p}px ${BRUSH}`, h * 0.78, '#ff1a2a');
  },
};

export const virginLED: SignSpec = {
  name: 'virginLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#2a0206', '#c8102a'], head: 'Virgin', sub: 'HOTELS LAS VEGAS', font: (p) => `bold ${p}px ${BRUSH}` },
      { bg: ['#0a0a0a', '#3a3a3a'], head: 'THEATER', sub: 'LIVE MUSIC TONIGHT', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#06202a', '#1a8a9a'], head: 'ELIA BEACH CLUB', sub: 'POOL · CABANAS', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#0a0a0a', '#a04a10'], head: 'HALLOWEEN', sub: 'COSTUME CONTEST · CASINO FLOOR', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#ffb030' },
    ]);
  },
};
