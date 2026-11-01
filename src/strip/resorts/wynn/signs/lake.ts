import type { SignSpec } from '../../../../world/signKit';

/**
 * The Lake of Dreams waterfall after dark: the 40 m sheet of water becomes a
 * projection screen, washes of colour pouring down it in turn.
 */
export const lakeOfDreams: SignSpec = {
  name: 'lakeOfDreams',
  w: 512,
  h: 256,
  frames: 6,
  draw(g, w, h, frame) {
    const hues = [200, 280, 330, 40, 160, 0];
    const hue = hues[frame % hues.length];
    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, `hsl(${hue},90%,70%)`);
    grad.addColorStop(1, `hsl(${(hue + 40) % 360},80%,35%)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
    // Falling streaks.
    for (let i = 0; i < 160; i++) {
      const x = (i * 97.3 + frame * 13) % w;
      const y = (i * 53.1 + frame * 41) % h;
      g.fillStyle = `rgba(255,255,255,${0.15 + ((i * 7) % 5) * 0.08})`;
      g.fillRect(x, y, 2, 18 + (i % 4) * 10);
    }
  },
};
