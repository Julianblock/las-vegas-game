import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { flamingoZ, nearCross } from '../../streets';
import { RUNS } from './median';

/** Lamps every fourth palm gap, so they never land in a crown. */
const STEP = 104;

/** Twin-arm lamps down West Flamingo's median, arms out over both directions. */
export function buildLights(k: Kit) {
  for (const [x0, x1] of RUNS) {
    for (let x = x0 + 13; x <= x1; x += STEP) {
      if (nearCross(x, 30)) continue;
      stripLamp(k, k.frame(x, flamingoZ(x), 0), 0, 0, 11);
    }
  }
}
