import * as THREE from 'three';
import { FX, SolidBuilder } from '../../world/builders';

/** Car length over couplers (m). */
export const CAR = 15.6;

/**
 * One monorail car, along local +x, its floor straddling the beam: a body
 * in the train's livery, a dark glass window band, skirts that wrap the
 * beam, and on the lead car a raked nose. Origin at the beam top.
 */
export function carGeometry(livery: string, trim: string, nose: boolean) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const body = new THREE.BoxGeometry(CAR - 0.6, 2.6, 2.7);
  if (nose) {
    const p = body.attributes.position;
    for (let i = 0; i < p.count; i++) {
      if (p.getX(i) > 0 && p.getY(i) > 0) p.setX(i, p.getX(i) - 1.6);
    }
    body.computeVertexNormals();
  }
  s.add(body.translate(0, 1.75, 0), I, livery, { rough: 0.45 });
  s.add(new THREE.BoxGeometry(CAR - (nose ? 3.6 : 1.4), 1.05, 2.76).translate(nose ? -0.9 : 0, 2.3, 0), I, '#1a2430', { rough: 0.1, fx: FX.GLASS });
  s.add(new THREE.BoxGeometry(CAR - 0.8, 0.12, 2.8).translate(0, 1.5, 0), I, trim, { rough: 0.4 });
  for (const z of [-0.62, 0.62]) s.add(new THREE.BoxGeometry(CAR - 1.2, 1.1, 0.12).translate(0, 0.0, z), I, '#2a2a2a', { rough: 0.7 });
  s.add(new THREE.BoxGeometry(CAR - 2, 0.3, 1.8).translate(0, 3.15, 0), I, '#d8d8d8', { rough: 0.5 });
  if (nose) s.add(new THREE.BoxGeometry(0.1, 0.25, 1.6).translate(CAR / 2 - 0.4, 1.0, 0), I, '#fff6d0', { rough: 0.2, fx: FX.NEON });
  return s.build();
}
