import * as THREE from 'three';
import { FX, type Frame } from '../../world/builders';
import type { Kit } from '../kit';

const BRONZE = '#8a6a3a';

/**
 * The King in bronze: flared jumpsuit legs, a guitar slung across the body and
 * one arm thrown up, on a granite plinth. `h` is the figure's height.
 */
export function elvis(k: Kit, fr: Frame, x: number, z: number, h = 2.6, yaw = 0) {
  const m = { rough: 0.35, fx: FX.METAL };
  k.box(fr, x, -0.2, z, 1.8, 1.4, 1.8, '#3a3836', { rough: 0.5 }, yaw);
  const y = 1.2;
  for (const s of [-1, 1]) {
    k.geo(fr, new THREE.CylinderGeometry(h * 0.045, h * 0.075, h * 0.48, 7).translate(s * h * 0.06, h * 0.24, 0), x, y, z, BRONZE, m, yaw);
  }
  k.geo(fr, new THREE.CylinderGeometry(h * 0.1, h * 0.08, h * 0.32, 8).translate(0, h * 0.62, 0), x, y, z, BRONZE, m, yaw);
  k.geo(fr, new THREE.BoxGeometry(h * 0.3, h * 0.05, h * 0.12).translate(0, h * 0.8, 0), x, y, z, BRONZE, m, yaw);
  k.geo(fr, new THREE.SphereGeometry(h * 0.07, 8, 6).translate(0, h * 0.9, 0), x, y, z, BRONZE, m, yaw);
  k.geo(fr, new THREE.SphereGeometry(h * 0.072, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.45).translate(0, h * 0.92, -h * 0.01), x, y, z, '#4a3a22', m, yaw);
  k.geo(fr, new THREE.BoxGeometry(h * 0.05, h * 0.36, h * 0.05).rotateZ(-0.35).translate(h * 0.2, h * 0.95, 0), x, y, z, BRONZE, m, yaw);
  k.geo(fr, new THREE.BoxGeometry(h * 0.05, h * 0.3, h * 0.05).rotateZ(1.1).translate(-h * 0.08, h * 0.62, h * 0.1), x, y, z, BRONZE, m, yaw);
  // The guitar: body on the hip, neck up toward the left shoulder.
  k.geo(fr, new THREE.CylinderGeometry(h * 0.1, h * 0.1, h * 0.04, 10).rotateX(Math.PI / 2).translate(-h * 0.02, h * 0.55, h * 0.1), x, y, z, BRONZE, m, yaw);
  k.geo(fr, new THREE.BoxGeometry(h * 0.03, h * 0.3, h * 0.02).rotateZ(0.8).translate(-h * 0.14, h * 0.68, h * 0.1), x, y, z, BRONZE, m, yaw);
}
