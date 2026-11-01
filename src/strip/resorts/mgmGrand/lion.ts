import type { Kit } from '../../kit';
import { lion } from '../../parts/lion';

/** Where the lion stands; OSM maps it as a stack of nested blocks, which this replaces. */
export const LION = { x: 1643, z: 1600 };

/**
 * The bronze lion (1997), at 14 m the largest bronze statue in the United
 * States, recumbent on a 7.6 m pedestal ringed by fountains at the
 * Tropicana corner; it replaced the lion's-mouth entrance gamblers shunned.
 */
export function buildLion(k: Kit) {
  const fr = k.frame(LION.x, LION.z, 225);
  k.reserve(fr, 0, 0, 18, 18);
  k.cyl(fr, 0, -0.6, 0, 16, 16, 0.9, '#3a6a8a', { rough: 0.1, glow: 0.2 }, 32);
  k.cyl(fr, 0, -0.5, 0, 9, 10, 7.6, '#d8ccb4', { rough: 0.7 }, 24);
  lion(k, fr, 0, 7.1, 0, 14);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    k.light(fr.p(Math.cos(a) * 12, 0.5, Math.sin(a) * 12), 1, 0.85, 0.5, 2);
  }
  k.gather(fr, 0, 18, 10, 18);
}
