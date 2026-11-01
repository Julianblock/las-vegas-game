import { type SignSpec } from '../../../world/signKit';
import { CONDENSED, ROMAN } from '../../paint/fonts';
import { letters } from '../../paint/letters';
import { slides } from '../../paint/screen';

/** EXCALIBUR in gilded blackletter-ish Roman capitals on the towers. */
export const excaliburCrown: SignSpec = {
  name: 'excaliburCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    letters(g, 'EXCALIBUR', w, h, (p) => `bold ${p}px ${ROMAN}`, '#ffd23a', '#8a1a1a', '#ff8a2a');
  },
};

export const excaliburLED: SignSpec = {
  name: 'excaliburLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#3a0a0a', '#9a1a1a'], head: 'EXCALIBUR', sub: 'HOTEL & CASINO', font: (p) => `bold ${p}px ${ROMAN}`, ink: '#ffd23a' },
      { bg: ['#0a0a2a', '#2a2a8a'], head: 'TOURNAMENT OF KINGS', sub: 'DINNER & JOUSTING NIGHTLY', font: (p) => `bold ${p}px ${ROMAN}` },
      { bg: ['#1a0a1a', '#5a1a5a'], head: 'THUNDER FROM DOWN UNDER', sub: 'THE ULTIMATE GIRLS NIGHT OUT', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#0a1a0a', '#1a5a1a'], head: 'FUN DUNGEON', sub: 'ARCADE · MIDWAY GAMES', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#ffe23a' },
    ]);
  },
};
