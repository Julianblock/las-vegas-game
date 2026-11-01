import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** THE STRAT in tall white capitals on the hotel tower and the marquee. */
export const stratCrown: SignSpec = {
  name: 'stratCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'THE STRAT', w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.72, '#ffffff');
  },
};

export const stratLED: SignSpec = {
  name: 'stratLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#0a0a1a', '#2a3a8a'], head: 'THE STRAT', sub: 'HOTEL · CASINO · TOWER', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#1a0a0a', '#9a1a1a'], head: 'SKYJUMP', sub: '855 FEET · 40 MPH', font: (p) => `900 italic ${p}px ${GROTESK}`, ink: '#ffe23a' },
      { bg: ['#0a1a2a', '#1a5a8a'], head: 'TOP OF THE WORLD', sub: 'REVOLVING RESTAURANT · 800 FT', font: (p) => `bold ${p}px ${GROTESK}` },
      { bg: ['#ff6a00', '#1a0a00'], head: 'BIG SHOT', sub: 'X-SCREAM · INSANITY', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
