import { neon, type SignSpec } from '../../world/signKit';
import { GROTESK } from '../../strip/paint/fonts';
import { slides } from '../../strip/paint/screen';

/** The race's wordmark along the pit building, white over a red flash. */
export const gpWord: SignSpec = {
  name: 'gpWord',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'LAS VEGAS GRAND PRIX', w / 2, h * 0.55, w * 0.94, (p) => `italic 900 ${p}px ${GROTESK}`, h * 0.62, '#ffffff');
  },
};

/** Screens on the Plaza: race week messages. */
export const gpLED: SignSpec = {
  name: 'gpLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#05050a', '#e10600'], head: 'GRAND PRIX', sub: 'LAS VEGAS · NOV 19–21', font: (p) => `italic 900 ${p}px ${GROTESK}` },
      { bg: ['#0a0a0a', '#3a3a3a'], head: '50 LAPS', sub: '6.2 KM · 17 TURNS', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#1a0030', '#7a1fd0'], head: 'LIGHTS OUT', sub: 'SATURDAY 8 PM', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#050505', '#c0c0c0'], head: 'PADDOCK CLUB', sub: 'GRAND PRIX PLAZA', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#111' },
    ]);
  },
};
