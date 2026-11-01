import type { Kit } from '../../kit';
import { liberty } from '../../parts/liberty';

/**
 * NYNY's Statue of Liberty (1997), about half the original's height, at the
 * Tropicana corner over the harbour pool and the 9/11 memorial wall of
 * T-shirts and badges fans left here in 2001. Frame faces the corner.
 */
export function buildLiberty(k: Kit) {
  const fr = k.frame(1478, 1640, 135);
  k.reserve(fr, 0, 0, 16, 16);
  k.box(fr, 0, -0.6, 0, 30, 0.7, 26, '#3a6a8a', { rough: 0.1, glow: 0.2 });
  liberty(k, fr, 0, 0, 30, 16);
  k.gather(fr, 0, 16, 10, 20);
}
