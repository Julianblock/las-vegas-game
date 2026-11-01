import type { SignSpec } from '../../../../world/signKit';

/** The Doge's Palace upper wall: rose and white marble laid in a diamond lattice, with pointed windows. */
export const dogeWall: SignSpec = {
  name: 'dogeWall',
  w: 1024,
  h: 256,
  draw(g, w, h) {
    g.fillStyle = '#f0d8cc';
    g.fillRect(0, 0, w, h);
    const s = 32;
    for (let y = 0; y < h + s; y += s / 2) {
      for (let x = ((y / (s / 2)) % 2) * (s / 2); x < w + s; x += s) {
        g.fillStyle = (x + y) % (s * 2) < s ? '#d89a90' : '#f8ece2';
        g.beginPath();
        g.moveTo(x, y - s / 2);
        g.lineTo(x + s / 2, y);
        g.lineTo(x, y + s / 2);
        g.lineTo(x - s / 2, y);
        g.closePath();
        g.fill();
      }
    }
    // Large pointed-arch windows along the piano nobile.
    g.fillStyle = '#2a2420';
    for (let x = 60; x < w; x += 128) {
      g.beginPath();
      g.moveTo(x - 22, h * 0.82);
      g.lineTo(x - 22, h * 0.45);
      g.quadraticCurveTo(x, h * 0.22, x + 22, h * 0.45);
      g.lineTo(x + 22, h * 0.82);
      g.closePath();
      g.fill();
    }
  },
};
