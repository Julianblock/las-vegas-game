import { type SignSpec } from '../../../../world/signKit';
import { BLACK } from '../../../../world/signKit';
import { letters } from '../../../paint/letters';

/** RIO in fat italic capitals over a carnival sunburst, on both broad faces of the Masquerade tower. */
export const rioCrown: SignSpec = {
  name: 'rioCrown',
  w: 512,
  h: 256,
  cutout: true,
  draw(g, w, h) {
    const cx = w / 2;
    const cy = h * 0.55;
    const rays = ['#ff3a2a', '#ffb02a', '#ffe23a', '#2ac0ff', '#b03aff'];
    for (let i = 0; i < 20; i++) {
      const a0 = (i / 20) * Math.PI * 2;
      const a1 = a0 + Math.PI / 24;
      g.fillStyle = rays[i % rays.length];
      g.beginPath();
      g.moveTo(cx, cy);
      g.lineTo(cx + Math.cos(a0) * w * 0.5, cy + Math.sin(a0) * h * 0.5);
      g.lineTo(cx + Math.cos(a1) * w * 0.5, cy + Math.sin(a1) * h * 0.5);
      g.closePath();
      g.fill();
    }
    letters(g, 'RIO', w, h, (p) => `italic 900 ${p}px ${BLACK}`, '#ffffff', '#c0102a', '#ff3a2a');
  },
};
