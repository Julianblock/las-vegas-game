import type { Kit } from '../../kit';
import { flamingoZ, nearCross } from '../../streets';
import { hydrant } from './hydrant';

/** One hydrant every this many metres along each kerb. */
const STEP = 150;

/** Hydrants on both of Flamingo's sidewalks from Decatur to Maryland, skipping corners and landmarks. */
export function buildHydrants(k: Kit, half: (x: number) => number) {
  for (const side of [-1, 1]) {
    for (let x = -1590 + (side > 0 ? 70 : 0); x < 4650; x += STEP) {
      if (nearCross(x, 26)) continue;
      const z = flamingoZ(x) + side * (half(x) + 1.2);
      if (k.occupies(x, z)) continue;
      hydrant(k, k.frame(x, z, side > 0 ? 0 : 180), 0, 0);
    }
  }
}
