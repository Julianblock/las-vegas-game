import { BLACK, type SignSpec } from '../../../../world/signKit';
import { BRUSH, DIDONE, GROTESK } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The Flamingo Road marquee's rotation. */
export const rioLED: SignSpec = {
  name: 'rioLED',
  w: 640,
  h: 352,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#8a0a1a', '#1a2a8a'], head: 'RIO', sub: 'HOTEL & CASINO', font: (p) => `italic 900 ${p}px ${BLACK}` },
      { bg: ['#0a0a0a', '#2a2a2a'], head: 'PENN & TELLER', sub: 'NIGHTLY IN THE PENN & TELLER THEATER', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#ff3a2a' },
      { bg: ['#1a0a10', '#5a1a3a'], head: 'Chippendales', sub: 'THE PARTY STARTS HERE', font: (p) => `${p}px ${BRUSH}` },
      { bg: ['#0a1a0a', '#1a4a2a'], head: 'VooDoo', sub: 'ROOFTOP · 51 FLOORS UP', font: (p) => `italic ${p}px ${DIDONE}`, ink: '#c8ff6a' },
      { bg: ['#ff6a00', '#2a0a00'], head: 'MASQUERADE', sub: 'HALLOWEEN COSTUME BALL · TONIGHT', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
