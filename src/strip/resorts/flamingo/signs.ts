import { neon, type SignSpec } from '../../../world/signKit';
import { BRUSH } from '../../paint/fonts';
import { slides } from '../../paint/screen';

const PINK = '#ff4fa8';

/** One neon plume: a curved quill with barbs, drawn pink-to-orange. */
function plume(g: CanvasRenderingContext2D, x: number, y: number, len: number, bend: number, lit: boolean) {
  g.save();
  g.translate(x, y);
  g.rotate(bend);
  g.shadowColor = PINK;
  g.shadowBlur = lit ? len * 0.06 : 0;
  g.strokeStyle = lit ? '#ffd0ea' : '#c2408a';
  g.lineWidth = len * 0.02;
  g.beginPath();
  g.moveTo(0, 0);
  g.quadraticCurveTo(len * 0.12, -len * 0.5, 0, -len);
  g.stroke();
  g.strokeStyle = lit ? PINK : '#9a2a6a';
  g.lineWidth = len * 0.012;
  for (let t = 0.15; t < 0.98; t += 0.06) {
    const qx = len * 0.12 * 2 * t * (1 - t);
    const qy = -len * t;
    const w = len * 0.16 * Math.sin(Math.PI * t);
    g.beginPath();
    g.moveTo(qx - w, qy + w * 0.5);
    g.lineTo(qx, qy);
    g.lineTo(qx + w, qy + w * 0.5);
    g.stroke();
  }
  g.restore();
}

export const FLAMINGO_SIGNS: SignSpec[] = [
  {
    // The pink script wordmark that crowns the towers.
    name: 'flamingoScript',
    w: 1024,
    h: 300,
    cutout: true,
    draw(g, w, h) {
      neon(g, 'Flamingo', w / 2, h * 0.52, w * 0.94, (p) => `italic bold ${p}px ${BRUSH}`, h * 0.86, PINK);
    },
  },
  {
    // The feather bloom at the Strip corner: plumes light up in sequence.
    name: 'flamingoBloom',
    w: 600,
    h: 700,
    frames: 4,
    cutout: true,
    draw(g, w, h, frame) {
      const n = 9;
      for (let i = 0; i < n; i++) {
        const a = (i / (n - 1) - 0.5) * 1.5;
        plume(g, w / 2, h * 0.98, h * 0.9, a, (i + frame) % 4 !== 0);
      }
    },
  },
  {
    name: 'flamingoLED',
    w: 640,
    h: 352,
    frames: 4,
    draw(g, w, h, frame) {
      slides(g, w, h, frame, [
        { bg: ['#ff4fa8', '#ff9a3c'], head: 'FLAMINGO', sub: 'SINCE 1946' },
        { bg: ['#1a0a2a', '#7a1a6a'], head: 'Wildlife Habitat', sub: 'CHILEAN FLAMINGOS · FREE ADMISSION', font: (p) => `italic bold ${p}px ${BRUSH}` },
        { bg: ['#3a0a18', '#c8102e'], head: 'GO POOL', sub: 'DAYCLUB · FRI-SUN' },
        { bg: ['#0a1a3a', '#2a6ad8'], head: 'Bugsy’s Bar', sub: 'BENJAMIN SIEGEL’S ORIGINAL', font: (p) => `italic bold ${p}px ${BRUSH}` },
      ]);
    },
  },
];
