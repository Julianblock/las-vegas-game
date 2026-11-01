import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';
import type { Livery } from './liveries';

const TYRE = '#141414';
const CARBON = '#232427';

/**
 * A Formula 1 car, about 5.6 m long and 2 m wide, nose along +x: a tapered
 * monocoque, sidepods, halo, airbox, front and rear wings, four fat tyres,
 * and a red rain light that glows at the back.
 */
export function carGeometry(l: Livery) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const paint = { rough: 0.3 };
  const nose = new THREE.CylinderGeometry(0.12, 0.32, 2.2, 8).rotateZ(-Math.PI / 2);
  s.add(nose.translate(1.6, 0.42, 0), I, l.body, paint);
  s.add(new THREE.BoxGeometry(2.4, 0.55, 0.8).translate(-0.3, 0.5, 0), I, l.body, paint);
  s.add(new THREE.BoxGeometry(1.7, 0.42, 1.5).translate(-0.4, 0.4, 0), I, l.body, paint);
  s.add(new THREE.BoxGeometry(1.6, 0.06, 1.52).translate(-0.4, 0.62, 0), I, l.accent, paint);
  s.add(new THREE.BoxGeometry(1.2, 0.5, 0.36).translate(-1.0, 0.95, 0), I, l.body, paint);
  s.add(new THREE.TorusGeometry(0.34, 0.035, 5, 12, Math.PI).rotateY(Math.PI / 2).translate(0.35, 0.82, 0), I, CARBON, { rough: 0.4 });
  s.add(new THREE.SphereGeometry(0.15, 8, 6).translate(0.2, 0.86, 0), I, l.accent, paint);
  s.add(new THREE.BoxGeometry(0.5, 0.05, 1.9).translate(2.55, 0.15, 0), I, l.wing, paint);
  for (const z of [-0.95, 0.95]) s.add(new THREE.BoxGeometry(0.6, 0.28, 0.03).translate(2.55, 0.25, z), I, l.wing, paint);
  s.add(new THREE.BoxGeometry(0.45, 0.06, 1.05).translate(-2.45, 0.95, 0), I, l.wing, paint);
  s.add(new THREE.BoxGeometry(0.3, 0.05, 1.05).translate(-2.55, 0.75, 0), I, l.wing, paint);
  for (const z of [-0.52, 0.52]) s.add(new THREE.BoxGeometry(0.6, 0.55, 0.03).translate(-2.45, 0.75, z), I, l.body, paint);
  s.add(new THREE.BoxGeometry(0.06, 0.08, 0.12).translate(-2.65, 0.45, 0), I, '#ff2020', { rough: 0.5, glow: 2.5 });
  const wheel = (x: number, z: number, r: number, w: number) => {
    s.add(new THREE.CylinderGeometry(r, r, w, 14).rotateX(Math.PI / 2).translate(x, r, z), I, TYRE, { rough: 0.9 });
  };
  for (const z of [-0.8, 0.8]) {
    wheel(1.75, z, 0.36, 0.34);
    wheel(-1.75, z * 1.02, 0.36, 0.42);
  }
  return s.build();
}
