import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';

/**
 * The Wynn's Strip marquee: a slender bronze stem carrying a tall oval of LED
 * on each face, turned to meet traffic both ways up the boulevard.
 * Frame faces north-north-east along the Strip.
 */
export function buildMarquee(k: Kit) {
  const fr = k.frame(1910, -1065, 28);
  k.reserve(fr, 0, 0, 10, 6);
  k.cyl(fr, 0, -1, 0, 1.6, 1.1, 22, '#6a4428', { rough: 0.3, fx: FX.METAL }, 12);
  k.box(fr, 0, 21, 0, 16, 26, 2.4, '#2a1a0e', { rough: 0.3 });
  for (const side of [1, -1]) k.sign(fr, 'wynnMarquee', 0, 34, side * 1.25, 25, 1.25, FX.NONE, side > 0 ? 0 : Math.PI);
  k.box(fr, 0, 47, 0, 14, 1.4, 2.6, '#6a4428', { rough: 0.3, fx: FX.METAL });
  for (const x of [-12, 12]) palm(k, fr, x, 0, 13);
}
