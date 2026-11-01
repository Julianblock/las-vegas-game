import * as THREE from 'three';
import type { Frame } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The Al Davis Memorial Torch: 85 feet of 3D-printed lattice, the tallest
 * 3D-printed structure in the world, holding an eternal flame for the
 * Raiders' late owner.
 */
export function davisTorch(k: Kit, fr: Frame, x: number, z: number) {
  const h = 26;
  k.box(fr, x, 0, z, 6, 0.8, 6, '#2a2a2e', { rough: 0.5 });
  k.geo(fr, new THREE.CylinderGeometry(2.4, 1.1, h, 12, 8, true).translate(0, h / 2 + 0.8, 0), x, 0, z, '#d8dade', { rough: 0.35 });
  k.geo(fr, new THREE.CylinderGeometry(1.6, 0.6, h * 0.9, 8, 1).translate(0, h * 0.45 + 0.8, 0), x, 0, z, '#1a1a1e', { rough: 0.5 });
  k.geo(fr, new THREE.ConeGeometry(1.8, 4.5, 10).translate(0, h + 3, 0), x, 0, z, '#ffb040', { rough: 0.9, glow: 2 });
  k.light(fr.p(x, h + 3, z), 1, 0.65, 0.25, 6);
}
