import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { latticeColumn } from '../../parts/lattice';

/** Footprint centre of the half-scale tower, legs on the compass diagonals of its frame. */
export const EIFFEL = { x: 1605.5, z: 392.5, h: 165 };
const IRON = '#6e5238';

/** Leg half-spread from the tower axis at height y: the curve of Eiffel's profile. */
const spread = (y: number) => 30 * Math.exp(-y / 34) + 2.2;

/**
 * Paris Las Vegas' Eiffel Tower (1999): a half-scale replica in puddled-iron
 * brown, four arched legs braced in lattice rising to the first platform, the
 * legs converging past the second, the shaft and lantern at 165 m. Three legs
 * plunge through the casino roof; the fourth stands on the Strip walk.
 */
export function buildEiffel(k: Kit) {
  const fr = k.frame(EIFFEL.x, EIFFEL.z, 45);
  const legTop = 58;
  const levels = [0, 14, 29, 44, legTop];
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    for (let i = 0; i + 1 < levels.length; i++) {
      const y0 = levels[i];
      const y1 = levels[i + 1];
      const a = new THREE.Vector3(sx * spread(y0) * 0.78, y0, sz * spread(y0) * 0.78);
      const b = new THREE.Vector3(sx * spread(y1) * 0.78, y1, sz * spread(y1) * 0.78);
      latticeColumn(k, fr, a, b, 7 - i * 1.2, 7 - (i + 1) * 1.2, 3, 0.45, IRON, 0.5, FX.CHASE);
    }
  }
  // Arches between the legs under the first platform.
  for (let s = 0; s < 4; s++) {
    const yaw = (s * Math.PI) / 2;
    const m = new THREE.Matrix4().makeRotationY(yaw);
    const arch = new THREE.TorusGeometry(15, 0.7, 4, 16, Math.PI).translate(0, 0, 0);
    k.geoM(fr, arch, m.clone().multiply(new THREE.Matrix4().makeTranslation(0, 12, spread(14) * 0.78)), IRON, { rough: 0.6 });
  }
  // First platform, with its lit gallery skirt.
  k.box(fr, 0, 29, 0, 34, 2.2, 34, IRON, { rough: 0.6 });
  k.box(fr, 0, 31.2, 0, 32, 1.6, 32, '#4a3a2a', { rough: 0.5, glow: 0.4 });
  // Converging shaft: three tapered lattice stages to the summit.
  latticeColumn(k, fr, new THREE.Vector3(0, legTop, 0), new THREE.Vector3(0, 92, 0), 14, 8.5, 5, 0.4, IRON, 0.5, FX.CHASE);
  k.box(fr, 0, legTop, 0, 18, 1.8, 18, IRON, { rough: 0.6 });
  latticeColumn(k, fr, new THREE.Vector3(0, 92, 0), new THREE.Vector3(0, 138, 0), 8.5, 4.5, 7, 0.32, IRON, 0.5, FX.CHASE);
  // Observation deck, lantern and mast.
  k.box(fr, 0, 138, 0, 9, 4, 9, '#3a2e22', { rough: 0.4, glow: 0.6 });
  k.box(fr, 0, 142, 0, 6, 6, 6, IRON, { rough: 0.6 });
  k.cyl(fr, 0, 148, 0, 1.6, 0.6, 9, IRON, { rough: 0.6 }, 8);
  k.cyl(fr, 0, 157, 0, 0.3, 0.15, 8, '#c8c8c8', { rough: 0.4 }, 6);
  k.light(fr.p(0, 165, 0), 1, 0.1, 0.05, 4, 1);
  k.light(fr.p(0, 140, 0), 1, 0.85, 0.55, 8);
  // The tower's gold floodlighting, mirrored in Lake Bellagio across the Strip.
  k.glow(fr, 0, 0, 40, 0, 150, 1, 0.7, 0.35);
  k.reserve(fr, 0, 0, 34, 34);
  k.gather(fr, 0, 0, 8, 10);
}
