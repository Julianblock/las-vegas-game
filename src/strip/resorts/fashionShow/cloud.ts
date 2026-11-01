import { Vector3 } from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The Cloud (2003): a 146 m steel lozenge hovering 40 m over Fashion Show's
 * Strip plaza on four splayed legs, its underbelly a projection ground and
 * its Strip edge hung with LED screens. Frame on the Strip walk, facing the
 * boulevard.
 */
export function buildCloud(k: Kit) {
  const fr = k.frame(1932, -1252, 118);
  k.reserve(fr, 0, -26, 76, 30);
  const y = 38;
  const half = 48;
  const r = 24;
  k.box(fr, 0, y, -26, half * 2, 4, r * 2, '#d8dade', { rough: 0.35, fx: FX.METAL });
  for (const x of [-half, half]) k.cyl(fr, x, y, -26, r, r, 4, '#d8dade', { rough: 0.35, fx: FX.METAL }, 24);
  k.box(fr, 0, y - 0.15, -26, half * 2, 0.2, r * 2 - 2, '#a8c8ff', { glow: 0.6 });
  for (const x of [-half, half]) k.cyl(fr, x, y - 0.25, -26, r - 1, r - 1, 0.2, '#a8c8ff', { glow: 0.6 }, 24);
  for (const [x, z] of [[-42, -10], [42, -10], [-42, -42], [42, -42]]) {
    k.tube(fr, new Vector3(x * 0.9, 0, z), new Vector3(x, y, z * 0.95 - 1), 0.8, '#c8cace', 0.1);
  }
  for (const x of [-30, 0, 30]) {
    k.box(fr, x, y - 15, -2.8, 24, 13, 0.8, '#141414', { rough: 0.4 });
    k.sign(fr, 'cloudScreen', x, y - 8.5, -2.3, 12, 1.25, FX.NONE);
  }
  k.gather(fr, 0, -20, 30, 50);
  k.walk(fr, [[-80, 0], [0, -8], [80, 0]]);
  k.light(fr.p(0, y - 2, -26), 0.7, 0.8, 1, 8);
}
