import { fitText, neon, type SignSpec } from '../../../world/signKit';
import { SLAB } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** A gold horseshoe, open end up, with nail holes. */
function shoe(g: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  g.save();
  g.lineCap = 'round';
  g.strokeStyle = '#e8b84a';
  g.shadowColor = '#ffcc55';
  g.shadowBlur = r * 0.2;
  g.lineWidth = r * 0.42;
  g.beginPath();
  g.arc(cx, cy, r, Math.PI * 0.15 - Math.PI, Math.PI * 0.85 - Math.PI * 2, true);
  g.stroke();
  g.fillStyle = '#5a3a10';
  for (let i = 0; i < 7; i++) {
    const a = Math.PI * 0.25 + (i / 6) * Math.PI * 0.5 + Math.PI / 2;
    g.beginPath();
    g.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, r * 0.06, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
}

export const HORSESHOE_SIGNS: SignSpec[] = [
  {
    name: 'horseshoeCrown',
    w: 1024,
    h: 200,
    cutout: true,
    draw(g, w, h) {
      shoe(g, h * 0.55, h * 0.48, h * 0.32);
      neon(g, 'HORSESHOE', w * 0.58, h * 0.52, w * 0.74, (p) => `900 ${p}px ${SLAB}`, h * 0.62, '#ff2a2a');
    },
  },
  {
    name: 'horseshoeLED',
    w: 640,
    h: 352,
    frames: 4,
    draw(g, w, h, frame) {
      slides(g, w, h, frame, [
        { bg: ['#3a0606', '#a01010'], head: 'HORSESHOE', sub: 'WORLD SERIES OF POKER · HOME', ink: '#f2c860' },
        { bg: ['#101010', '#3a2a10'], head: 'Jubilee!', sub: 'THE BALLY’S CLASSIC · 1981-2016', ink: '#f2c860' },
        { bg: ['#0a1a2a', '#1a5a8a'], head: 'Grand Bazaar', sub: 'SHOPS · SWAROVSKI STARBURST' },
        { bg: ['#2a0a2a', '#7a2a7a'], head: 'Jack Binion’s', sub: 'STEAKHOUSE', ink: '#f2c860' },
      ]);
    },
  },
  {
    // Market stall awning banner.
    name: 'bazaarBanner',
    w: 512,
    h: 96,
    draw(g, w, h) {
      g.fillStyle = '#1a3a6a';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#ffffff';
      fitText(g, 'GRAND BAZAAR SHOPS', w / 2, h / 2, w * 0.9, (p) => `bold ${p}px ${SLAB}`, h * 0.5);
    },
  },
];
