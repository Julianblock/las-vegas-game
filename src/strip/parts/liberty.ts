import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

const COPPER = '#6fa596';

/**
 * Liberty Enlightening the World, at any scale: granite pedestal, robed
 * figure, seven-rayed crown, torch raised in the right hand (lit), tablet in
 * the left. `h` is the figure's height above the pedestal.
 */
export function liberty(k: Kit, fr: Frame, x: number, z: number, h: number, pedestal: number) {
  const P = pedestal;
  k.box(fr, x, -0.5, z, P * 0.7, P * 0.35, P * 0.7, '#b8b0a0', { rough: 0.8 });
  k.box(fr, x, P * 0.35 - 0.5, z, P * 0.5, P * 0.5, P * 0.5, '#c8c0b0', { rough: 0.8 });
  k.box(fr, x, P * 0.85 - 0.5, z, P * 0.42, P * 0.15, P * 0.42, '#b8b0a0', { rough: 0.8 });
  const y = P;
  const mat = { rough: 0.6 };
  k.geo(fr, new THREE.CylinderGeometry(h * 0.1, h * 0.17, h * 0.62, 10).translate(0, h * 0.31, 0), x, y, z, COPPER, mat);
  k.geo(fr, new THREE.CylinderGeometry(h * 0.07, h * 0.1, h * 0.12, 8).translate(0, h * 0.06, 0), x, y + h * 0.62, z, COPPER, mat);
  k.geo(fr, new THREE.SphereGeometry(h * 0.055, 10, 8), x, y + h * 0.78, z, COPPER, mat);
  for (let i = 0; i < 7; i++) {
    const a = ((i - 3) / 3) * 1.1;
    const tip = new THREE.Vector3(x + Math.sin(a) * h * 0.11, y + h * 0.82 + Math.cos(a) * h * 0.07, z + h * 0.02);
    k.tube(fr, new THREE.Vector3(x, y + h * 0.8, z), tip, h * 0.008, COPPER, 0);
  }
  // Her right arm (local -x, the viewer's left) raises the torch; the left cradles the tablet.
  const shoulder = new THREE.Vector3(x - h * 0.08, y + h * 0.68, z);
  const hand = new THREE.Vector3(x - h * 0.12, y + h * 1.02, z - h * 0.02);
  k.tube(fr, shoulder, hand, h * 0.035, COPPER, 0);
  k.cyl(fr, hand.x, hand.y, hand.z, h * 0.02, h * 0.035, h * 0.07, COPPER, mat, 8);
  k.geo(fr, new THREE.ConeGeometry(h * 0.03, h * 0.07, 8).translate(0, h * 0.035, 0), hand.x, hand.y + h * 0.07, hand.z, '#ffc040', { glow: 2 });
  k.light(fr.p(hand.x, hand.y + h * 0.1, hand.z), 1, 0.75, 0.3, 4);
  k.box(fr, x + h * 0.1, y + h * 0.45, z + h * 0.06, h * 0.06, h * 0.16, h * 0.03, COPPER, mat, 0.3);
}
