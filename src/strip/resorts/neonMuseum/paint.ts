/** Deterministic noise so a sign's rust lands the same way every load. */
function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

/** Rust blooms and flaking paint over a retired sign face. */
export function rust(g: CanvasRenderingContext2D, w: number, h: number, seed: number, amount = 40) {
  const r = rand(seed);
  for (let i = 0; i < amount; i++) {
    const x = r() * w, y = r() * h, s = 4 + r() * w * 0.04;
    g.fillStyle = `rgba(${110 + r() * 40},${50 + r() * 30},${20 + r() * 20},${0.25 + r() * 0.35})`;
    g.beginPath();
    g.ellipse(x, y, s, s * (0.4 + r() * 0.8), r() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
}

/** A rounded panel ringed with bulb sockets, most of them dead. */
export function bulbPanel(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string, seed: number) {
  g.fillStyle = fill;
  g.fillRect(x, y, w, h);
  const r = rand(seed);
  const step = Math.max(10, Math.min(w, h) * 0.08);
  const bulb = (bx: number, by: number) => {
    const lit = r() < 0.35;
    g.fillStyle = lit ? '#fff2b0' : '#5a5040';
    if (lit) {
      g.shadowColor = '#ffd27a';
      g.shadowBlur = step * 0.8;
    }
    g.beginPath();
    g.arc(bx, by, step * 0.22, 0, Math.PI * 2);
    g.fill();
    g.shadowBlur = 0;
  };
  for (let bx = x + step / 2; bx < x + w; bx += step) {
    bulb(bx, y + step / 2);
    bulb(bx, y + h - step / 2);
  }
  for (let by = y + step * 1.5; by < y + h - step; by += step) {
    bulb(x + step / 2, by);
    bulb(x + w - step / 2, by);
  }
}
