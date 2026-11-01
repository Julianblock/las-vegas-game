import { fitText, type SignSpec } from '../../../world/signKit';
import { DIDONE } from '../../paint/fonts';
import { bulbBorder } from '../../paint/marquee';
import { slides } from '../../paint/screen';

export const PARIS_SIGNS: SignSpec[] = [
  {
    // The balloon's gores: royal blue with gold fleurs and PARIS across the equator.
    name: 'parisBalloon',
    w: 512,
    h: 512,
    frames: 3,
    draw(g, w, h, frame) {
      g.fillStyle = '#1a2e8a';
      g.beginPath();
      g.arc(w / 2, h / 2, w * 0.49, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#e8c45a';
      g.lineWidth = 6;
      for (let i = -3; i <= 3; i++) {
        g.beginPath();
        g.ellipse(w / 2, h / 2, Math.abs(i) * w * 0.07 + 2, h * 0.49, 0, 0, Math.PI * 2);
        g.stroke();
      }
      g.fillStyle = '#c8102e';
      g.fillRect(0, h * 0.4, w, h * 0.2);
      bulbBorder(g, 8, h * 0.4, w - 16, h * 0.2, 18, '#fff2b0', '#6a4a10', frame);
      g.fillStyle = '#ffffff';
      fitText(g, 'PARIS', w / 2, h / 2, w * 0.7, (p) => `bold ${p}px ${DIDONE}`, h * 0.16);
    },
    cutout: true,
  },
  {
    name: 'parisLED',
    w: 640,
    h: 352,
    frames: 4,
    draw(g, w, h, frame) {
      slides(g, w, h, frame, [
        { bg: ['#0a1450', '#c8102e'], head: 'Paris', sub: 'LAS VEGAS · OUI!', font: (p) => `italic bold ${p}px ${DIDONE}` },
        { bg: ['#2a1a0a', '#8a6a3a'], head: 'Eiffel Tower', sub: 'VIEWING DECK · 46 STORIES UP', font: (p) => `italic bold ${p}px ${DIDONE}` },
        { bg: ['#1a0a1a', '#6a2a5a'], head: 'Vanderpump à Paris', sub: 'COCKTAILS & CHAMPAGNE', font: (p) => `italic bold ${p}px ${DIDONE}` },
        { bg: ['#0a2a2a', '#2a7a6a'], head: 'Mon Ami Gabi', sub: 'PATIO DINING ON THE STRIP', font: (p) => `italic bold ${p}px ${DIDONE}` },
      ]);
    },
  },
];
