import { neon, type SignSpec } from '../../../world/signKit';
import { DIDONE } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** FONTAINEBLEAU in thin white Didone, as on the crown of the blue crescent. */
export const fbCrown: SignSpec = {
  name: 'fbCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'FONTAINEBLEAU', w / 2, h * 0.55, w * 0.94, (p) => `${p}px ${DIDONE}`, h * 0.62, '#ffffff');
  },
};

export const fbLED: SignSpec = {
  name: 'fbLED',
  w: 640,
  h: 352,
  frames: 3,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#06142a', '#3a6a9a'], head: 'FONTAINEBLEAU', sub: 'LAS VEGAS', font: (p) => `${p}px ${DIDONE}` },
      { bg: ['#0a0a0a', '#2a2a3a'], head: 'LIV', sub: 'NIGHTCLUB', font: (p) => `${p}px ${DIDONE}`, ink: '#e8d0ff' },
      { bg: ['#1a1408', '#8a7040'], head: 'BLEAU LIVE', sub: 'THEATER', font: (p) => `${p}px ${DIDONE}`, ink: '#fff0d0' },
    ]);
  },
};
