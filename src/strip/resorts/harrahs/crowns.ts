import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The wordmark on each Strip-facing face of the chevron tower: the north
 * wing's face looks north-west, the south wing's south-west. Points sit at
 * the middle of each wing's outer edge, from the OSM outline.
 */
const FACES: [number, number, number][] = [
  [1782, -415, 316],
  [1779, -347, 224],
];

export function buildCrowns(k: Kit) {
  for (const [x, z, deg] of FACES) {
    const fr = k.frame(x, z, deg);
    k.sign(fr, 'harrahsCrown', 0, 99, 0.6, 8, 1.35, FX.NEON);
  }
}
