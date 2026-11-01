import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, DIDONE, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** MANDALAY BAY in gold on the wing tips of the gold Y. */
export const mandalayCrown: SignSpec = {
  name: 'mandalayCrown',
  w: 1024,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'MANDALAY BAY', w / 2, h * 0.55, w * 0.94, (p) => `${p}px ${DIDONE}`, h * 0.66, '#ffe08a');
  },
};

/** The W's single white letter on the old Delano's crown. */
export const wCrown: SignSpec = {
  name: 'wCrown',
  w: 256,
  h: 256,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'W', w / 2, h * 0.55, w * 0.9, (p) => `bold ${p}px ${GROTESK}`, h * 0.86, '#ffffff');
  },
};

export const mandalayLED: SignSpec = {
  name: 'mandalayLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#2a1a00', '#9a6a10'], head: 'MANDALAY BAY', sub: 'RESORT & CASINO', font: (p) => `${p}px ${DIDONE}`, ink: '#fff0c0' },
      { bg: ['#021a2a', '#0a6a8a'], head: 'SHARK REEF', sub: 'AQUARIUM', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#1a0a2a', '#5a1a8a'], head: 'MICHAEL JACKSON ONE', sub: 'CIRQUE DU SOLEIL', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#0a0a0a', '#3a3a3a'], head: 'MICHELOB ULTRA ARENA', sub: 'LIVE THIS WEEKEND', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#4ab0ff' },
    ]);
  },
};
