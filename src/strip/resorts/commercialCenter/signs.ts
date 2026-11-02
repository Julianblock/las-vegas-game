import { fitText, neon, SANS, SCRIPT, type SignSpec } from '../../../world/signKit';

/** The plaza's name in mid-century script over a teal field with a starburst. */
export const commercialCenterName: SignSpec = {
  name: 'commercialCenterName',
  w: 512,
  h: 256,
  draw(g, w, h) {
    g.fillStyle = '#1a6a6a';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#ffd400';
    g.lineWidth = 3;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      g.beginPath();
      g.moveTo(w * 0.86, h * 0.22);
      g.lineTo(w * 0.86 + Math.cos(a) * h * 0.16, h * 0.22 + Math.sin(a) * h * 0.16);
      g.stroke();
    }
    neon(g, '#ffffff', 10);
    fitText(g, 'Commercial', w * 0.46, h * 0.38, w * 0.8, (p) => `${p}px ${SCRIPT}`, h * 0.4);
    neon(g, '#ffd400', 6);
    fitText(g, 'CENTER', w / 2, h * 0.78, w * 0.7, (p) => `900 ${p}px ${SANS}`, h * 0.28);
  },
};

const BOARD = ['THAI · KOREAN · SUSHI', 'BARS · CLUBS · KARAOKE', 'SHOPS · SPAS · MARKETS', 'SINCE 1963'];

/** The tenant board under the name, stepping through what’s inside. */
export const commercialCenterBoard: SignSpec = {
  name: 'commercialCenterBoard',
  w: 512,
  h: 96,
  frames: BOARD.length,
  draw(g, w, h, f) {
    g.fillStyle = '#f0e8d0';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#1a3a3a';
    fitText(g, BOARD[f], w / 2, h / 2, w * 0.9, (p) => `900 ${p}px ${SANS}`, h * 0.5);
  },
};
