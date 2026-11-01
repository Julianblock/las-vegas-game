import type { SignSpec } from '../../../../world/signKit';
import { ROMAN } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The Strip marquee's rotation. */
export const venetianLED: SignSpec = {
  name: 'venetianLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#0a1a3a', '#2a5a9a'], head: 'GONDOLA RIDES', sub: 'OUTDOOR CANAL · DAILY', font: (p) => `600 ${p}px ${ROMAN}` },
      { bg: ['#2a0a0a', '#8a2a1a'], head: 'Grand Canal Shoppes', sub: 'ST. MARK’S SQUARE', font: (p) => `italic 600 ${p}px ${ROMAN}` },
      { bg: ['#101010', '#4a3a1a'], head: 'Tao', sub: 'NIGHTCLUB · RESTAURANT', ink: '#f2c860' },
      { bg: ['#0a2a2a', '#1a7a6a'], head: 'Madame Tussauds', sub: 'MEET THE STARS', font: (p) => `italic 600 ${p}px ${ROMAN}` },
    ]);
  },
};
