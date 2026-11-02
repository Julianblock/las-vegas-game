import type { Kit } from '../../../kit';
import { flamingoZ } from '../../../streets';
import { SITES } from './sites';
import { billboard } from './structure';

export { billboardFace } from './face';

/** Raise a bulletin at every site whose ground is free, faces turned to the traffic. */
export function buildBillboards(k: Kit, half: (x: number) => number) {
  for (const s of SITES) {
    const z = flamingoZ(s.x) + s.side * (half(s.x) + s.back);
    if (k.occupies(s.x, z)) continue;
    billboard(k, k.frame(s.x, z, 90));
  }
}
