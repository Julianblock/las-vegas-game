/** Channel letters on a roof or tower crown: glyphs only, outlined so they read by day. */
export function letters(g: CanvasRenderingContext2D, text: string, w: number, h: number, font: (px: number) => string, face: string, edge: string, glowCol = '') {
  g.save();
  g.lineJoin = 'round';
  if (glowCol) {
    g.shadowColor = glowCol;
    g.shadowBlur = h * 0.08;
  }
  g.font = font(h * 0.78);
  const m = g.measureText(text).width;
  g.translate(w / 2, h * 0.53);
  if (m > w * 0.96) g.scale((w * 0.96) / m, 1);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineWidth = h * 0.07;
  g.strokeStyle = edge;
  g.strokeText(text, 0, 0);
  g.fillStyle = face;
  g.fillText(text, 0, 0);
  g.restore();
}
