import { fitText, type SignSpec } from '../../../world/signKit';
import { ROMAN } from '../../paint/fonts';
import { letters } from '../../paint/letters';
import { slides } from '../../paint/screen';

const GOLD = '#f2d58a';

export const CAESARS_SIGNS: SignSpec[] = [
  {
    // Incised Roman capitals on the tower crowns.
    name: 'caesarsCrown',
    w: 1024,
    h: 128,
    cutout: true,
    draw(g, w, h) {
      letters(g, 'CAESARS PALACE', w, h, (p) => `600 ${p}px ${ROMAN}`, '#f8f0dc', '#8a7a5a', '#fff2c8');
    },
  },
  {
    // The temple marquee: gold capitals on a marble entablature.
    name: 'caesarsMarquee',
    w: 768,
    h: 240,
    draw(g, w, h) {
      const grad = g.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#f4ecdc');
      grad.addColorStop(1, '#d8ccb0');
      g.fillStyle = grad;
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#a89468';
      g.lineWidth = 6;
      g.strokeRect(10, 10, w - 20, h - 20);
      g.fillStyle = '#7a5a1a';
      fitText(g, 'CÆSARS PALACE', w / 2, h * 0.42, w * 0.88, (p) => `600 ${p}px ${ROMAN}`, h * 0.36);
      g.fillStyle = '#8a7048';
      fitText(g, 'LAS VEGAS · MCMLXVI', w / 2, h * 0.76, w * 0.6, (p) => `${p}px ${ROMAN}`, h * 0.12);
    },
  },
  {
    name: 'caesarsLED',
    w: 640,
    h: 352,
    frames: 4,
    draw(g, w, h, frame) {
      slides(g, w, h, frame, [
        { bg: ['#1a1408', '#5a4418'], head: 'COLOSSEUM', sub: 'TONIGHT · LIVE IN CONCERT', ink: GOLD, font: (p) => `600 ${p}px ${ROMAN}` },
        { bg: ['#0a1830', '#1a4a8a'], head: 'Forum Shops', sub: 'TALKING STATUES · ATLANTIS', font: (p) => `600 ${p}px ${ROMAN}` },
        { bg: ['#101010', '#3a3a3a'], head: 'Hell’s Kitchen', sub: 'GORDON RAMSAY', ink: '#ff5a1a' },
        { bg: ['#2a0a0a', '#8a1a1a'], head: 'Garden of the Gods', sub: 'POOL OASIS', font: (p) => `600 ${p}px ${ROMAN}` },
      ]);
    },
  },
];
