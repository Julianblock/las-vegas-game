import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * Crown logos at the convex faces of the crescents, from their OSM outlines:
 * Aria's east tower bows east toward the Strip, its west tower west, and
 * Vdara's crescent bows north.
 */
const CROWNS: [string, number, number, number, number, number][] = [
  ['ariaCrown', 1224.5, 828, 86, 152, 7],
  ['ariaCrown', 1133.5, 975, 270, 172, 7],
  ['vdaraCrown', 1070, 696.5, 0, 160, 6],
];

export function buildCrowns(k: Kit) {
  for (const [sign, x, z, deg, y, h] of CROWNS) k.sign(k.frame(x, z, deg), sign, 0, y, 0.6, h, 1.35, FX.NEON);
}
