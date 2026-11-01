import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

const CONCRETE = '#c9c6bf';
const STEEL = '#5d6268';

/** Length of one barrier section along the track. */
export const BAY = 3;

/**
 * One bay of the street circuit's wall: a concrete block about a metre high
 * topped with a debris fence, posts at each end and wire panels between.
 * Runs along x, centred; the track side faces +z.
 */
export function barrierGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const block = new THREE.BoxGeometry(BAY - 0.04, 1.05, 0.6);
  const p = block.attributes.position;
  for (let i = 0; i < p.count; i++) if (p.getY(i) > 0) p.setZ(i, p.getZ(i) * 0.45);
  block.computeVertexNormals();
  s.add(block.translate(0, 0.525, 0), I, CONCRETE, { rough: 0.9 });
  s.add(new THREE.BoxGeometry(BAY - 0.04, 0.12, 0.62).translate(0, 0.06, 0), I, '#9a978f', { rough: 0.9 });
  s.add(new THREE.BoxGeometry(0.1, 3.2, 0.1).translate(-BAY / 2 + 0.05, 2.65, -0.05), I, STEEL, { rough: 0.5 });
  for (const y of [1.3, 2.3, 3.3, 4.2]) {
    s.add(new THREE.BoxGeometry(BAY, 0.03, 0.03).translate(0, y, 0.02), I, STEEL, { rough: 0.5 });
  }
  for (let x = -BAY / 2 + 0.3; x < BAY / 2; x += 0.3) {
    s.add(new THREE.BoxGeometry(0.015, 3.1, 0.015).translate(x, 2.75, 0.03), I, '#7b8087', { rough: 0.6 });
  }
  return s.build();
}
