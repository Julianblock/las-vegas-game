import { fitText, neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

export const LINQ_SIGNS: SignSpec[] = [
  {
    name: 'linqCrown',
    w: 1024,
    h: 200,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'THE LINQ', w / 2, h * 0.52, w * 0.92, (p) => `300 ${p}px ${GROTESK}`, h * 0.74, '#b06cff');
    },
  },
  {
    name: 'highRollerSign',
    w: 768,
    h: 160,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'HIGH ROLLER', w / 2, h * 0.52, w * 0.94, (p) => `bold ${p}px ${GROTESK}`, h * 0.66, '#ff3a8a');
    },
  },
  {
    name: 'promenadeArch',
    w: 768,
    h: 128,
    draw(g, w, h) {
      g.fillStyle = '#16121e';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#ffffff';
      fitText(g, 'THE LINQ PROMENADE', w / 2, h * 0.55, w * 0.9, (p) => `600 ${p}px ${GROTESK}`, h * 0.55);
    },
  },
  {
    name: 'linqLED',
    w: 640,
    h: 352,
    frames: 4,
    draw(g, w, h, frame) {
      slides(g, w, h, frame, [
        { bg: ['#2a0a4a', '#8a3ad8'], head: 'HIGH ROLLER', sub: 'HAPPY HALF HOUR · OPEN BAR CABINS' },
        { bg: ['#0a2a3a', '#1a8ab8'], head: 'FLY LINQ', sub: 'ZIPLINE · 1,121 FEET' },
        { bg: ['#3a1a0a', '#d8701a'], head: 'In-N-Out', sub: 'DOUBLE-DOUBLE · ANIMAL STYLE' },
        { bg: ['#0a0a0a', '#3a3a3a'], head: 'O’Sheas', sub: 'BEER PONG · CHEAP TABLES', ink: '#4ad84a' },
      ]);
    },
  },
];
