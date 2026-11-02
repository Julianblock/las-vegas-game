import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';
import { flamingoZ, nearCross } from '../../streets';

/** Stretches of raised, planted median: Decatur to Wynn, and Wynn to the Rio's kink. */
export const RUNS: [number, number][] = [
  [-1600, -450],
  [-405, 180],
];

const STEP = 26;

/** Date palms down the median of West Flamingo, broken at every cross street. */
export function buildMedian(k: Kit) {
  for (const [x0, x1] of RUNS) {
    for (let x = x0; x <= x1; x += STEP) {
      if (nearCross(x, 22)) continue;
      const z = flamingoZ(x);
      const fr = k.frame(x, z, 90);
      k.box(fr, 0, -0.3, 0, 2.2, 0.45, STEP - 4, '#a89a80', { rough: 0.95 });
      palm(k, fr, 0, 0, 11 + ((x * 7) % 3), x);
    }
  }
}
