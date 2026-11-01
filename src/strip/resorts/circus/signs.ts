import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, ROUND } from '../../paint/fonts';
import { bulbBorder } from '../../paint/marquee';
import { slides } from '../../paint/screen';

/** CIRCUS CIRCUS in fat round red letters outlined in bulbs. */
export const circusCrown: SignSpec = {
  name: 'circusCrown',
  w: 1024,
  h: 224,
  frames: 2,
  draw(g, w, h, frame) {
    g.fillStyle = '#fff4e8';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 16; i++) {
      g.fillStyle = i % 2 ? '#ffffff' : '#ff4a8a';
      g.fillRect((i * w) / 16, 0, w / 16, h * 0.12);
      g.fillRect((i * w) / 16, h * 0.88, w / 16, h * 0.12);
    }
    neon(g, 'CIRCUS CIRCUS', w / 2, h * 0.53, w * 0.9, (p) => `900 ${p}px ${ROUND}`, h * 0.56, '#e8102a');
    bulbBorder(g, 6, 6, w - 12, h - 12, 22, '#fff2a0', '#6a4a20', frame);
  },
};

/**
 * Lucky the Clown (1968): white face, cherry nose, a grin to the ears, the
 * pointed hat, and his giant swirl lollipop held up beside him.
 */
export const lucky: SignSpec = {
  name: 'lucky',
  w: 512,
  h: 768,
  cutout: true,
  draw(g, w, h) {
    const cx = w * 0.42;
    const cy = h * 0.42;
    const r = w * 0.27;
    g.lineCap = 'round';
    g.strokeStyle = '#e8e0d0';
    g.lineWidth = w * 0.025;
    g.beginPath();
    g.moveTo(w * 0.8, h * 0.3);
    g.lineTo(w * 0.72, h * 0.9);
    g.stroke();
    const lx = w * 0.8;
    const ly = h * 0.22;
    for (let i = 0; i < 8; i++) {
      g.fillStyle = ['#ff2a6a', '#ffe23a', '#2ac0ff', '#7aff3a'][i % 4];
      g.beginPath();
      g.moveTo(lx, ly);
      g.arc(lx, ly, w * 0.17, (i * Math.PI) / 4, ((i + 1) * Math.PI) / 4);
      g.fill();
    }
    g.fillStyle = '#2a6aff';
    g.beginPath();
    g.moveTo(cx - r * 0.95, cy - r * 0.55);
    g.lineTo(cx + r * 0.95, cy - r * 0.55);
    g.lineTo(cx + r * 0.1, cy - r * 2.3);
    g.fill();
    g.fillStyle = '#ffe23a';
    g.beginPath();
    g.arc(cx + r * 0.1, cy - r * 2.3, r * 0.2, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#ff8a1a';
    for (const s of [-1, 1]) {
      g.beginPath();
      g.arc(cx + s * r * 1.05, cy - r * 0.1, r * 0.42, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = '#fffaf2';
    g.beginPath();
    g.arc(cx, cy, r, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#101010';
    for (const s of [-1, 1]) {
      g.beginPath();
      g.ellipse(cx + s * r * 0.36, cy - r * 0.25, r * 0.1, r * 0.17, 0, 0, Math.PI * 2);
      g.fill();
    }
    g.strokeStyle = '#e8102a';
    g.lineWidth = r * 0.16;
    g.beginPath();
    g.arc(cx, cy + r * 0.05, r * 0.6, 0.15 * Math.PI, 0.85 * Math.PI);
    g.stroke();
    g.fillStyle = '#ff1a2a';
    g.beginPath();
    g.arc(cx, cy + r * 0.08, r * 0.2, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#ff4a8a';
    g.beginPath();
    g.moveTo(cx - r * 0.9, cy + r * 1.05);
    g.lineTo(cx + r * 0.9, cy + r * 1.05);
    g.lineTo(cx + r * 0.55, cy + r * 2.6);
    g.lineTo(cx - r * 0.55, cy + r * 2.6);
    g.fill();
    g.fillStyle = '#ffffff';
    for (let i = 0; i < 3; i++) {
      g.beginPath();
      g.arc(cx, cy + r * (1.45 + i * 0.4), r * 0.1, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = '#ffe23a';
    g.beginPath();
    g.moveTo(cx - r * 1.1, cy + r * 0.85);
    g.lineTo(cx + r * 1.1, cy + r * 0.85);
    g.lineTo(cx, cy + r * 1.3);
    g.fill();
  },
};

export const circusLED: SignSpec = {
  name: 'circusLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#ff4a8a', '#7a0a3a'], head: 'CIRCUS CIRCUS', sub: 'FREE CIRCUS ACTS DAILY', font: (p) => `900 ${p}px ${ROUND}` },
      { bg: ['#ff2a8a', '#2a0a5a'], head: 'ADVENTUREDOME', sub: '5 ACRES OF INDOOR THRILLS', font: (p) => `900 ${p}px ${ROUND}`, ink: '#ffe23a' },
      { bg: ['#0a2a6a', '#1a6aff'], head: 'MIDWAY', sub: 'GAMES · PRIZES · FUN', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#1a0a0a', '#8a2a0a'], head: 'THE STEAK HOUSE', sub: 'MESQUITE-GRILLED SINCE 1982', font: (p) => `900 ${p}px ${CONDENSED}` },
    ]);
  },
};
