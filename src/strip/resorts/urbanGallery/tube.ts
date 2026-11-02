/** A neon tube traced through canvas points: coloured halo, pale core. */
export function tube(g: CanvasRenderingContext2D, pts: number[], color: string, width: number, closed = false) {
  g.save();
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.beginPath();
  g.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
  if (closed) g.closePath();
  g.shadowColor = color;
  g.shadowBlur = width * 2.5;
  g.strokeStyle = color;
  g.lineWidth = width;
  g.stroke();
  g.shadowBlur = 0;
  g.strokeStyle = '#fff6ee';
  g.globalAlpha = 0.6;
  g.lineWidth = width * 0.4;
  g.stroke();
  g.restore();
}
