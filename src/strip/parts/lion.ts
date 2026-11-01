import * as THREE from 'three';
import { FX, type Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A recumbent lion facing local +z, `h` tall at the head: haunches, chest,
 * forepaws stretched out, a full mane round the head. Bronze, glinting gold.
 */
export function lion(k: Kit, fr: Frame, x: number, y: number, z: number, h: number, color = '#b8902e') {
  const m = { rough: 0.35, fx: FX.METAL, glow: 0.25 };
  const L = h * 1.8;
  k.geo(fr, new THREE.SphereGeometry(1, 12, 8).scale(L * 0.3, h * 0.3, h * 0.36), x, y + h * 0.3, z - L * 0.18, color, m);
  k.geo(fr, new THREE.SphereGeometry(1, 12, 8).scale(h * 0.34, h * 0.4, h * 0.34), x, y + h * 0.42, z + L * 0.12, color, m);
  k.geo(fr, new THREE.SphereGeometry(1, 14, 10).scale(h * 0.32, h * 0.34, h * 0.26), x, y + h * 0.72, z + L * 0.2, color, m);
  k.geo(fr, new THREE.SphereGeometry(1, 10, 8).scale(h * 0.17, h * 0.19, h * 0.2), x, y + h * 0.74, z + L * 0.3, color, m);
  k.geo(fr, new THREE.SphereGeometry(1, 8, 6).scale(h * 0.09, h * 0.07, h * 0.08), x, y + h * 0.68, z + L * 0.38, color, m);
  for (const s of [-1, 1]) {
    k.geo(fr, new THREE.CylinderGeometry(h * 0.07, h * 0.08, L * 0.32, 8).rotateX(Math.PI / 2), x + s * h * 0.18, y + h * 0.08, z + L * 0.34, color, m);
    k.geo(fr, new THREE.SphereGeometry(1, 8, 6).scale(h * 0.1, h * 0.22, L * 0.18), x + s * h * 0.26, y + h * 0.2, z - L * 0.28, color, m);
  }
  k.tube(fr, new THREE.Vector3(x, y + h * 0.15, z - L * 0.46), new THREE.Vector3(x + h * 0.35, y + h * 0.05, z - L * 0.62), h * 0.03, color, 0.25);
}
