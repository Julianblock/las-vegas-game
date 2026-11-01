import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';

/**
 * Fashion Show's Strip face: the white anchor boxes of Nordstrom, Neiman
 * Marcus and Macy's either side of the plaza, nameplates lit, glazed mall
 * entrances between. Same frame as The Cloud.
 */
export function buildMall(k: Kit) {
  const fr = k.frame(1932, -1252, 118);
  const boxes: [number, number, number, string][] = [
    [-120, 56, 24, 'nordstromSign'],
    [-70, 34, 20, 'fashionShowSign'],
    [80, 50, 26, 'neimanSign'],
    [132, 44, 22, 'macysSign'],
  ];
  for (const [x, w, h, sign] of boxes) {
    k.reserve(fr, x, -40, w / 2, 30);
    k.box(fr, x, -0.5, -40, w, h, 56, '#e8e4dc', { rough: 0.7 });
    k.box(fr, x, h - 0.5, -40, w + 0.6, 1.2, 56.6, '#cfcac0', { rough: 0.6 });
    k.sign(fr, sign, x, h - 6, -11.7, Math.min(6, w * 0.13), 1.2, FX.NEON);
    k.storefront(fr, x, -11.8, w * 0.5, 5, 0.9);
  }
  // Plaza paving under The Cloud.
  k.box(fr, 0, -0.35, -26, 140, 0.4, 48, '#c8c0b4', { rough: 0.9 });
  palmRow(k, fr, -150, 3, 160, 3, 14, 13);
}
