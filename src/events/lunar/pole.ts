import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

export const POLE_H = 6.5;
/** The crossarm reaches this far over the road along local +z. */
export const ARM = 3;

/** A red lantern pole with a gold crossarm reaching out over the traffic lane. */
export function poleGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  s.add(new THREE.CylinderGeometry(0.09, 0.12, POLE_H, 8).translate(0, POLE_H / 2, 0), I, '#a01818', { rough: 0.5 });
  s.add(new THREE.BoxGeometry(0.08, 0.08, ARM + 0.3).translate(0, POLE_H - 0.2, ARM / 2), I, '#e8b440', { rough: 0.35 });
  s.add(new THREE.SphereGeometry(0.14, 10, 8).translate(0, POLE_H + 0.05, 0), I, '#e8b440', { rough: 0.35 });
  return s.build();
}
