import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

const SILK = '#d81e1e';
const GOLD = '#e8b440';

/**
 * A round silk lantern about 0.8 m tall hanging from its cord: gold caps top
 * and bottom, a lit red body, and a gold tassel. The cord's top is the origin.
 */
export function lanternGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  s.add(new THREE.CylinderGeometry(0.01, 0.01, 0.3, 4).translate(0, -0.15, 0), I, '#2a2a2a', { rough: 0.8 });
  s.add(new THREE.CylinderGeometry(0.14, 0.18, 0.06, 12).translate(0, -0.33, 0), I, GOLD, { rough: 0.35 });
  const body = new THREE.SphereGeometry(0.36, 16, 10).scale(1, 0.82, 1).translate(0, -0.64, 0);
  s.add(body, I, SILK, { rough: 0.7, glow: 2.2 });
  s.add(new THREE.CylinderGeometry(0.18, 0.14, 0.06, 12).translate(0, -0.95, 0), I, GOLD, { rough: 0.35 });
  s.add(new THREE.CylinderGeometry(0.03, 0.06, 0.32, 6).translate(0, -1.14, 0), I, GOLD, { rough: 0.9 });
  return s.build();
}
