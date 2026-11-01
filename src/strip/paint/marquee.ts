/** Rows of incandescent chaser bulbs around a sign panel; `frame` steps the chase. */
export function bulbBorder(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, pitch: number, on: string, off: string, frame = 0) {
  const r = pitch * 0.3;
  let i = 0;
  const dot = (px: number, py: number) => {
    g.fillStyle = (i++ + frame) % 3 === 0 ? off : on;
    g.beginPath();
    g.arc(px, py, r, 0, Math.PI * 2);
    g.fill();
  };
  for (let px = x; px <= x + w; px += pitch) dot(px, y);
  for (let py = y + pitch; py <= y + h; py += pitch) dot(x + w, py);
  for (let px = x + w - pitch; px >= x; px -= pitch) dot(px, y + h);
  for (let py = y + h - pitch; py > y; py -= pitch) dot(x, py);
}
