import type { Kit } from '../../kit';
import { tieredFountain } from '../../parts/fountain';
import { stripLamp } from '../../parts/lamp';

const MANSARD = '#5a6670';
const STONE = '#ece2cc';

/**
 * Paris' Strip facade: the Opéra and Louvre-style pavilions under slate
 * mansards, Mon Ami Gabi's sidewalk patio, and the Fontaine des Mers.
 * Frame on the walk at x = 1576, +x south, +z west to the street.
 */
export function buildParisFrontage(k: Kit) {
  const fr = k.frame(1576, 440, 270);
  // Pavilions north and south of the tower's Strip leg.
  for (const [x, w] of [[-90, 26], [20, 30]] as const) {
    k.box(fr, x, -0.5, -12, w, 18.5, 20, STONE, { rough: 0.8, fx: 7 });
    k.box(fr, x, 18, -12, w + 1, 1.2, 21, STONE, { rough: 0.7 });
    k.box(fr, x, 19.2, -12, w - 2, 5, 18, MANSARD, { rough: 0.6, fx: 3 });
    for (let c = x - w / 2 + 3; c < x + w / 2 - 1; c += 4) k.cyl(fr, c, 3, -1.7, 0.45, 0.4, 12, STONE, { rough: 0.6 }, 8);
    k.storefront(fr, x, -1.9, w - 2, 3, 0.9);
  }
  // Mon Ami Gabi: a glass conservatory and red-umbrella patio on the walk.
  k.box(fr, -20, -0.3, -4, 28, 5, 8, '#c8d8e0', { rough: 0.1, glow: 0.4, fx: 5 });
  for (let x = -32; x <= -8; x += 6) {
    k.cyl(fr, x, -0.2, 2.5, 0.05, 0.05, 2.6, '#444');
    k.cyl(fr, x, 2.3, 2.5, 1.6, 0.1, 0.6, '#b01a2a', { rough: 0.8 }, 8);
  }
  k.gather(fr, -20, 2, 7, 16);
  tieredFountain(k, fr, 56, -18, 6);
  for (let x = -110; x <= 80; x += 36) stripLamp(k, fr, x, 7);
  k.walk(fr, [[-120, 2], [-20, 2], [90, 2]]);
}
