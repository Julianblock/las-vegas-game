import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

const MARBLE = '#f1ece2';

/** A marble figure on a plinth: draped body, head, a raised arm. Reads as statuary from the air. */
export function statue(k: Kit, fr: Frame, x: number, z: number, h = 3.2, yaw = 0, plinth = 2.4) {
  k.box(fr, x, -0.2, z, 1.6, plinth + 0.2, 1.6, '#e2dccf', { rough: 0.7 }, yaw);
  const y = plinth;
  k.geo(fr, new THREE.CylinderGeometry(0.28 * h * 0.3, 0.42 * h * 0.3, h * 0.62, 8).translate(0, h * 0.31, 0), x, y, z, MARBLE, { rough: 0.6 }, yaw);
  k.geo(fr, new THREE.SphereGeometry(h * 0.08, 8, 6), x, y + h * 0.72, z, MARBLE, { rough: 0.6 });
  k.box(fr, x + 0.3, y + h * 0.55, z, 0.14, h * 0.4, 0.14, MARBLE, { rough: 0.6 }, yaw);
}

/** Winged Victory: a striding figure with swept-back wings on a ship's-prow base. */
export function victory(k: Kit, fr: Frame, x: number, z: number, h = 5) {
  k.box(fr, x, -0.2, z, 3.2, 3.2, 2.2, '#d8d0c0', { rough: 0.7 });
  statue(k, fr, x, z, h, 0, 3);
  for (const s of [-1, 1]) k.box(fr, x + s * 0.7, 3 + h * 0.5, z - 0.4, 1.4, h * 0.45, 0.12, MARBLE, { rough: 0.6 }, s * 0.5);
}
