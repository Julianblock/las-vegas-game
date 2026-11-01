import { fitText, type SignSpec } from '../../../world/signKit';
import { DIDONE } from '../../paint/fonts';
import { letters } from '../../paint/letters';
import { slides } from '../../paint/screen';

export const BELLAGIO_SIGNS: SignSpec[] = [
  {
    name: 'bellagioCrown',
    w: 1024,
    h: 150,
    cutout: true,
    draw(g, w, h) {
      letters(g, 'BELLAGIO', w, h, (p) => `500 ${p}px ${DIDONE}`, '#f6dfa0', '#7a5a24', '#ffe6a8');
    },
  },
  {
    // The Strip marquee's crest: gold Didone capitals on midnight blue.
    name: 'bellagioMarquee',
    w: 768,
    h: 256,
    draw(g, w, h) {
      const grad = g.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#0e1a34');
      grad.addColorStop(1, '#1c2c54');
      g.fillStyle = grad;
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#d8b46a';
      g.lineWidth = 5;
      g.strokeRect(12, 12, w - 24, h - 24);
      g.fillStyle = '#f2d48c';
      fitText(g, 'BELLAGIO', w / 2, h * 0.48, w * 0.84, (p) => `500 ${p}px ${DIDONE}`, h * 0.46);
      fitText(g, 'LAS VEGAS', w / 2, h * 0.8, w * 0.4, (p) => `${p}px ${DIDONE}`, h * 0.1);
    },
  },
  {
    name: 'bellagioLED',
    w: 640,
    h: 352,
    frames: 4,
    draw(g, w, h, frame) {
      slides(g, w, h, frame, [
        { bg: ['#0a1a3a', '#2a5aa8'], head: 'The Fountains', sub: 'SHOWS EVERY 15 MINUTES AFTER DARK', font: (p) => `italic 500 ${p}px ${DIDONE}` },
        { bg: ['#1a2a10', '#5a8a3a'], head: 'Conservatory', sub: 'AUTUMN HARVEST · NOW BLOOMING', font: (p) => `italic 500 ${p}px ${DIDONE}` },
        { bg: ['#0a0a2a', '#4a2a8a'], head: 'O', sub: 'CIRQUE DU SOLEIL', font: (p) => `500 ${p}px ${DIDONE}` },
        { bg: ['#2a1a0a', '#8a5a2a'], head: 'Gallery of Fine Art', sub: 'NOW ON VIEW', font: (p) => `italic 500 ${p}px ${DIDONE}` },
      ]);
    },
  },
];
