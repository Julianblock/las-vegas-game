import { Vector3 } from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';

/**
 * Carnaval Court: Harrah's open-air bar off the Strip, flair bartenders at a
 * round bar, a cover band on the stage, festoons and umbrellas, crowded into
 * the small hours. Frame at the court's centre facing the Strip.
 */
export function buildCarnaval(k: Kit) {
  const fr = k.frame(1637, -304, 270);
  k.reserve(fr, 0, 0, 22, 18);
  k.box(fr, 0, -0.3, 0, 40, 0.35, 32, '#6a4a3a', { rough: 0.8 });
  k.cyl(fr, -2, -0.2, 2, 5, 5, 1.2, '#3a1a10', { rough: 0.5 }, 20);
  k.cyl(fr, -2, 1, 2, 5.3, 5.3, 0.12, '#c89a2a', { rough: 0.3, fx: FX.METAL }, 20);
  k.cyl(fr, -2, -0.2, 2, 2.6, 2.6, 2.8, '#2a1a10', { rough: 0.6, glow: 0.4 }, 16);
  k.box(fr, 12, -0.2, -10, 12, 1.2, 7, '#1a1a1a', { rough: 0.6 });
  k.box(fr, 12, 6, -13, 13, 0.6, 1, '#1a1a1a', { rough: 0.6 });
  for (const x of [6.5, 17.5]) k.box(fr, x, 0, -13, 0.4, 6.2, 0.4, '#1a1a1a', { rough: 0.6 });
  k.light(fr.p(12, 5, -10), 1, 0.3, 0.8, 3, 0);
  k.light(fr.p(9, 5, -10), 0.3, 0.6, 1, 3, 0);
  for (const [x, z] of [[-12, -8], [-12, 10], [10, 10], [-14, 1]]) {
    k.cyl(fr, x, 2.4, z, 2.6, 0.2, 0.9, '#d8382a', { rough: 0.8 }, 8);
    k.cyl(fr, x, -0.2, z, 0.08, 0.08, 2.6, '#ddd', { rough: 0.5 }, 4);
  }
  for (let x = -18; x <= 18; x += 4) {
    k.tube(fr, new Vector3(x, 6.5, -15), new Vector3(x + 2, 5.6, 15), 0.05, '#ffe0a0', 1.4, FX.CHASE);
  }
  // Entry arch from the Strip.
  for (const s of [-1, 1]) k.box(fr, s * 6, -0.3, 17, 1.2, 7.5, 1.2, '#2a0a3a', { rough: 0.5 });
  k.box(fr, 0, 7, 17, 13, 2.4, 1.4, '#2a0a3a', { rough: 0.5 });
  k.sign(fr, 'carnavalSign', 0, 8.2, 17.75, 2.2, 1.3, FX.NONE, 0, true);
  for (const x of [-14, 14]) palm(k, fr, x, 17, 10);
  k.gather(fr, -2, 2, 12, 60);
  k.light(fr.p(-2, 6, 2), 1, 0.7, 0.4, 5);
}
