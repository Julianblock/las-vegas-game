import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { pine } from '../../parts/pine';

/**
 * The man-made mountain Wynn raised along the Strip so the Lake of Dreams
 * can only be seen from inside: a 43 m pine-clad berm, its waterfall facing
 * the lake and the tower, turned into a projection screen after dark.
 * Frame on the lake's west shore facing the tower (east).
 */
export function buildMountain(k: Kit) {
  const fr = k.frame(2010, -1160, 90);
  k.reserve(fr, 0, -6, 90, 18);
  const peaks: [number, number, number, number][] = [
    [-80, -8, 16, 22], [-56, -10, 22, 34], [-30, -8, 20, 43], [-6, -12, 24, 40],
    [18, -9, 20, 38], [40, -10, 22, 30], [64, -8, 18, 24], [84, -6, 12, 16],
  ];
  for (const [x, z, r, h] of peaks) {
    k.cyl(fr, x, -2, z, r, r * 0.25, h, '#5a4a36', { rough: 1 }, 9);
  }
  for (const [px, pz, r, h] of peaks) {
    for (let i = 0; i < 9; i++) {
      const a = i * 2.39996;
      const d = r * (0.25 + 0.65 * ((i * 0.618) % 1));
      const y = Math.min(h, (h * (r - d)) / (0.75 * r)) - 1.5;
      pine(k, fr, px + Math.cos(a) * d, y, pz + Math.sin(a) * d, 7 + (i % 3) * 2);
    }
  }
  // The waterfall sheet: a lit screen down the mountain's east face.
  k.box(fr, -4, 2, 6, 44, 34, 1.2, '#cfe4ee', { rough: 0.1, glow: 0.4 });
  k.sign(fr, 'lakeOfDreams', -4, 18, 6.8, 30, 1.1, FX.NONE);
  k.light(fr.p(-4, 4, 10), 0.6, 0.8, 1, 6);
}
