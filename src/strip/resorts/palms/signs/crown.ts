import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** PALMS in widely tracked capitals with the palm-frond mark, on the towers' crowns. */
export const palmsCrown: SignSpec = {
  name: 'palmsCrown',
  w: 1024,
  h: 224,
  cutout: true,
  draw(g, w, h) {
    const cx = w * 0.12;
    const cy = h * 0.5;
    g.strokeStyle = '#7affd8';
    g.shadowColor = '#7affd8';
    g.shadowBlur = h * 0.06;
    g.lineWidth = h * 0.05;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(cx, h * 0.92);
    g.quadraticCurveTo(cx + h * 0.05, cy, cx, h * 0.28);
    g.stroke();
    for (let i = 0; i < 7; i++) {
      const a = Math.PI + (i / 6) * Math.PI;
      g.beginPath();
      g.moveTo(cx, h * 0.28);
      g.quadraticCurveTo(cx + Math.cos(a) * h * 0.2, h * 0.28 + Math.sin(a) * h * 0.25, cx + Math.cos(a) * h * 0.34, h * 0.28 + Math.sin(a) * h * 0.12 + h * 0.12);
      g.stroke();
    }
    g.shadowBlur = 0;
    neon(g, 'P A L M S', w * 0.6, h * 0.55, w * 0.74, (p) => `300 ${p}px ${GROTESK}`, h * 0.62, '#ffffff');
  },
};
