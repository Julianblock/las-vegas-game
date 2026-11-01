import { Vector3 } from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The SkyTube: the glazed moving-walkway bridge from Palms Place to the
 * Fantasy tower's podium, lit cyan at night, on piers every 30 m.
 */
export function buildSkytube(k: Kit) {
  const a = { x: -762, z: 205 };
  const b = { x: -447, z: 228 };
  const len = Math.hypot(b.x - a.x, b.z - a.z);
  const deg = (Math.atan2(b.z - a.z, b.x - a.x) * 180) / Math.PI + 180;
  const fr = k.frame((a.x + b.x) / 2, (a.z + b.z) / 2, deg);
  const y = 9;
  k.tube(fr, new Vector3(-len / 2, y, 0), new Vector3(len / 2, y, 0), 2.4, '#9ad8e8', 0.35, FX.GLASS);
  k.box(fr, 0, y - 2.6, 0, len, 0.5, 4.6, '#d8d8d4', { rough: 0.6 });
  for (let x = -len / 2 + 15; x < len / 2; x += 30) k.box(fr, x, -0.5, 0, 1.4, y - 2, 1.4, '#cfcfc8', { rough: 0.6 });
  for (let x = -len / 2 + 8; x < len / 2; x += 16) k.light(fr.p(x, y, 0), 0.4, 0.9, 1, 1.4);
}
