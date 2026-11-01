import * as THREE from 'three';
import type { Mat } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * Extrudes a world-space footprint (flat x, z pairs) straight up `h` metres
 * from the ground at its first corner: for towers the map gets the height of wrong.
 */
export function prism(k: Kit, pts: number[], h: number, color: string, mat: Mat = {}) {
  const shape = new THREE.Shape();
  shape.moveTo(pts[0], -pts[1]);
  for (let i = 2; i < pts.length; i += 2) shape.lineTo(pts[i], -pts[i + 1]);
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false }).rotateX(-Math.PI / 2);
  k.s.add(g, new THREE.Matrix4().makeTranslation(0, k.y(pts[0], pts[1]), 0), color, mat);
}
