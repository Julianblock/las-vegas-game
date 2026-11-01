/** Neon line art for the Boneyard's signs: tubes drawn with a glow. */
function tube(g: CanvasRenderingContext2D, color: string, width: number) {
  g.strokeStyle = color;
  g.lineWidth = width;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.shadowColor = color;
  g.shadowBlur = width * 3;
}

/** The atomic-age starburst: spikes of alternating length around a point. */
export function starburst(g: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  tube(g, color, r * 0.06);
  g.beginPath();
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const l = i % 2 ? r * 0.55 : r;
    g.moveTo(x, y);
    g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  }
  g.stroke();
  g.shadowBlur = 0;
}

/** A saguaro with two arms, standing on y. */
export function cactus(g: CanvasRenderingContext2D, x: number, y: number, h: number, color: string) {
  tube(g, color, h * 0.08);
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x, y - h);
  g.moveTo(x, y - h * 0.45);
  g.lineTo(x - h * 0.25, y - h * 0.45);
  g.lineTo(x - h * 0.25, y - h * 0.75);
  g.moveTo(x, y - h * 0.6);
  g.lineTo(x + h * 0.22, y - h * 0.6);
  g.lineTo(x + h * 0.22, y - h * 0.85);
  g.stroke();
  g.shadowBlur = 0;
}

/** A rose in pink tube on a green stem. */
export function rose(g: CanvasRenderingContext2D, x: number, y: number, r: number) {
  tube(g, '#5aff6a', r * 0.1);
  g.beginPath();
  g.moveTo(x, y + r * 0.4);
  g.lineTo(x, y + r * 1.6);
  g.moveTo(x, y + r);
  g.quadraticCurveTo(x + r * 0.6, y + r * 0.8, x + r * 0.7, y + r * 0.5);
  g.stroke();
  tube(g, '#ff4aa0', r * 0.12);
  g.beginPath();
  for (let i = 0; i < 3; i++) g.arc(x, y, r * (0.25 + i * 0.2), i, i + Math.PI * 1.6);
  g.stroke();
  g.shadowBlur = 0;
}

/** A three-leaf shamrock. */
export function shamrock(g: CanvasRenderingContext2D, x: number, y: number, r: number) {
  tube(g, '#5aff6a', r * 0.1);
  g.beginPath();
  for (const a of [-Math.PI / 2, Math.PI / 6, (5 * Math.PI) / 6]) {
    const cx = x + Math.cos(a) * r * 0.45, cy = y + Math.sin(a) * r * 0.45;
    g.moveTo(cx + r * 0.38, cy);
    g.arc(cx, cy, r * 0.38, 0, Math.PI * 2);
  }
  g.moveTo(x, y);
  g.lineTo(x + r * 0.3, y + r * 1.1);
  g.stroke();
  g.shadowBlur = 0;
}

/** Three tongues of fire, orange outside and yellow in. */
export function flames(g: CanvasRenderingContext2D, x: number, y: number, h: number) {
  for (const [color, s] of [['#ff5a1a', 1], ['#ffd23a', 0.6]] as const) {
    tube(g, color, h * 0.06);
    g.beginPath();
    for (const dx of [-0.35, 0, 0.35]) {
      const bx = x + dx * h, t = dx === 0 ? 1 : 0.75;
      g.moveTo(bx - h * 0.15 * s, y + h * 0.4);
      g.quadraticCurveTo(bx - h * 0.2 * s, y - h * 0.1 * t, bx, y - h * 0.6 * t * s);
      g.quadraticCurveTo(bx + h * 0.2 * s, y - h * 0.1 * t, bx + h * 0.15 * s, y + h * 0.4);
    }
    g.stroke();
  }
  g.shadowBlur = 0;
}
