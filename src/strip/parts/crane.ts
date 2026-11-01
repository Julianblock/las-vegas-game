import * as THREE from 'three';
import { FX, type Frame } from '../../world/builders';
import type { Kit } from '../kit';
import { latticeColumn } from './lattice';

/** A tower crane: lattice mast, slewing jib and counter-jib, red aviation light. */
export function towerCrane(k: Kit, fr: Frame, x: number, z: number, h: number, jib = 55, yaw = 0) {
  latticeColumn(k, fr, new THREE.Vector3(x, 0, z), new THREE.Vector3(x, h, z), 2.2, 2.2, Math.round(h / 4), 0.18, '#e8c018', 0.2);
  const dir = new THREE.Vector3(Math.cos(yaw), 0, Math.sin(yaw));
  const top = new THREE.Vector3(x, h + 1, z);
  k.tube(fr, top, top.clone().addScaledVector(dir, jib), 1.2, '#e8c018', 0.2);
  k.tube(fr, top, top.clone().addScaledVector(dir, -jib * 0.3), 1.2, '#e8c018', 0.2);
  k.box(fr, x - dir.x * jib * 0.28, h - 1.5, z - dir.z * jib * 0.28, 3, 3, 3, '#8a8a8a', { rough: 0.6 });
  k.box(fr, x, h - 3, z, 3, 3, 3, '#2a3a4a', { rough: 0.4, fx: FX.GLASS });
  k.tube(fr, top.clone().setY(h + 8), top.clone().addScaledVector(dir, jib * 0.6), 0.1, '#888', 0);
  k.tube(fr, top.clone().setY(h + 8), top, 0.6, '#e8c018', 0.2);
  const hook = top.clone().addScaledVector(dir, jib * 0.7);
  k.tube(fr, hook, hook.clone().setY(h * 0.55), 0.08, '#444', 0);
  k.light(fr.p(x, h + 8.5, z), 1, 0.1, 0.05, 3, 1);
  k.light(fr.p(top.x + dir.x * jib, h + 1.5, top.z + dir.z * jib), 1, 0.1, 0.05, 2.5, 1);
}
