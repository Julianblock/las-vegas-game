import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { curvedSlab } from '../../parts/curvedSlab';

/** Wynn's centreline, traced down the middle of its OSM outline, north to south. */
export const WYNN_LINE: [number, number][] = [
  [2205, -1072], [2213, -1105], [2216, -1150], [2213, -1195], [2203, -1238], [2186, -1270], [2170, -1291],
];

/**
 * Wynn Las Vegas (2005): a 187 m bronze-glass crescent bowed away from the
 * Strip, its signature across the crown on both faces.
 */
export function buildWynnTower(k: Kit) {
  const h = 182;
  const frames = curvedSlab(k, { line: WYNN_LINE, thick: 22, h, color: '#7a5434', fx: FX.GLASS, wash: 0.5 });
  const mid = frames[2];
  k.box(mid, 0, h, 0, 30, 5, 18, '#6a4428', { rough: 0.3, fx: FX.METAL });
  k.sign(mid, 'wynnSignature', 0, h - 9, 11.4, 13, 1.4, FX.NEON);
  k.sign(mid, 'wynnSignature', 0, h - 9, -11.4, 13, 1.4, FX.NEON, Math.PI);
  for (const fr of [frames[0], frames[frames.length - 1]]) k.beacons(fr, 0, 0, 20, h);
}
