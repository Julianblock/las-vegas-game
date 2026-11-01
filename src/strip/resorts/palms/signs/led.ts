import type { SignSpec } from '../../../../world/signKit';
import { CONDENSED, DIDONE, GROTESK } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The Flamingo Road marquee's rotation. */
export const palmsLED: SignSpec = {
  name: 'palmsLED',
  w: 640,
  h: 352,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#06221e', '#0e6a5a'], head: 'PALMS', sub: 'CASINO RESORT', font: (p) => `300 ${p}px ${GROTESK}` },
      { bg: ['#101010', '#2a2a2a'], head: 'GhostBar', sub: '55 FLOORS · THE GLASS LEDGE', font: (p) => `italic ${p}px ${DIDONE}`, ink: '#c8f0ff' },
      { bg: ['#1a0a00', '#6a2a00'], head: 'PEARL CONCERT THEATER', sub: 'LIVE THIS WEEKEND', font: (p) => `bold ${p}px ${CONDENSED}` },
      { bg: ['#0a0a1a', '#1a1a5a'], head: 'Brenden Theatres', sub: '14 SCREENS · IMAX', font: (p) => `bold ${p}px ${GROTESK}` },
      { bg: ['#ff6a00', '#1a0a00'], head: 'HALLOWEEN', sub: 'COSTUME CONTEST · $10,000', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
