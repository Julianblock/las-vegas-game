import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { curvedSlab } from '../../parts/curvedSlab';

/** Encore's centreline, south-west to north-east. */
export const ENCORE_LINE: [number, number][] = [
  [2212, -1546], [2238, -1513], [2262, -1490], [2280, -1476], [2302, -1461], [2324, -1452], [2346, -1446],
];

/** Encore (2008): Wynn's taller twin, the same bronze crescent turned north-east. */
export function buildEncoreTower(k: Kit) {
  const h = 187;
  const frames = curvedSlab(k, { line: ENCORE_LINE, thick: 24, h, color: '#7e5836', fx: FX.GLASS, wash: 0.5 });
  const mid = frames[2];
  k.box(mid, 0, h, 0, 30, 5, 20, '#6a4428', { rough: 0.3, fx: FX.METAL });
  k.sign(mid, 'encoreSignature', 0, h - 14, 12.4, 20, 1.4, FX.NEON);
  k.sign(mid, 'encoreSignature', 0, h - 14, -12.4, 20, 1.4, FX.NEON, Math.PI);
  for (const fr of [frames[0], frames[frames.length - 1]]) k.beacons(fr, 0, 0, 20, h);
}
