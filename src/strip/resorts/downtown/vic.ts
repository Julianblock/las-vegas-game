import type { SignSpec } from '../../../world/signKit';

/**
 * Vegas Vic (1951), the 40-foot neon cowboy over the old Pioneer Club:
 * ten-gallon hat, cigarette, yellow shirt and blue jeans, one arm raised in
 * a wave. "Howdy, podner." Drawn as a cutout with neon outlines.
 */
export const vegasVic: SignSpec = {
  name: 'vegasVic',
  w: 256,
  h: 512,
  cutout: true,
  draw(g, w, h) {
    const sx = w / 256, sy = h / 512;
    const poly = (pts: number[], fill: string, line: string) => {
      g.beginPath();
      for (let i = 0; i < pts.length; i += 2) g[i ? 'lineTo' : 'moveTo'](pts[i] * sx, pts[i + 1] * sy);
      g.closePath();
      g.fillStyle = fill;
      g.fill();
      g.lineWidth = 6 * sx;
      g.strokeStyle = line;
      g.shadowColor = line;
      g.shadowBlur = 14 * sx;
      g.stroke();
      g.shadowBlur = 0;
    };
    // Boots, jeans, belt.
    poly([92, 470, 122, 470, 120, 500, 80, 500], '#6a3a1a', '#ff9a30');
    poly([140, 470, 170, 470, 182, 500, 142, 500], '#6a3a1a', '#ff9a30');
    poly([96, 300, 166, 300, 172, 472, 140, 472, 131, 360, 124, 472, 90, 472], '#1d4fb0', '#5ab0ff');
    // Shirt and the waving arm.
    poly([88, 180, 172, 180, 168, 302, 92, 302], '#f2c21a', '#fff07a');
    poly([168, 186, 214, 120, 232, 132, 186, 214], '#f2c21a', '#fff07a');
    poly([88, 186, 60, 262, 76, 270, 100, 214], '#f2c21a', '#fff07a');
    // Head, cigarette, the ten-gallon hat.
    poly([108, 120, 152, 120, 156, 176, 104, 176], '#e8b890', '#ffd2a0');
    poly([152, 160, 182, 156, 182, 162, 152, 166], '#ffffff', '#ffffff');
    poly([96, 74, 164, 74, 172, 112, 88, 112], '#f4f0e6', '#ffffff');
    poly([56, 112, 204, 112, 196, 126, 64, 126], '#f4f0e6', '#ffffff');
    g.fillStyle = '#ff3a2a';
    g.beginPath();
    g.arc(184 * sx, 159 * sy, 4 * sx, 0, Math.PI * 2);
    g.fill();
  },
};
