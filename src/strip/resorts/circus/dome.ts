import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/** The Adventuredome's footprint (OSM), which this module models by hand. */
export const DOME = { x: 2101, z: -2341, hw: 104, hd: 58, h: 36 };

/**
 * The Adventuredome (1993): five acres of pink space-frame glass over a
 * theme park, a long half-capsule behind Circus Circus with its ribs showing.
 */
export function buildDome(k: Kit) {
  const fr = k.frame(DOME.x, DOME.z, 180);
  const shell = new THREE.SphereGeometry(1, 40, 14, 0, Math.PI * 2, 0, Math.PI / 2);
  shell.scale(DOME.hw, DOME.h, DOME.hd);
  k.geo(fr, shell, 0, 0, 0, '#ff5aa8', { rough: 0.25, fx: FX.GLASS });
  for (let i = -6; i <= 6; i++) {
    const u = i / 7;
    const rib = new THREE.TorusGeometry(1, 0.012, 4, 24, Math.PI);
    rib.rotateY(Math.PI / 2);
    const s = Math.sqrt(1 - u * u);
    rib.scale(30, DOME.h * s * 1.005, DOME.hd * s * 1.005);
    k.geo(fr, rib, u * DOME.hw, 0, 0, '#ffd0e4', { rough: 0.4, fx: FX.METAL });
  }
  k.box(fr, 0, 0, 0, DOME.hw * 2 + 2, 2.2, DOME.hd * 2 + 2, '#d84a8a', { rough: 0.6 });
  for (let i = -5; i <= 5; i++) k.light(fr.p((i / 6) * DOME.hw, DOME.h * Math.sqrt(1 - (i / 6) ** 2) + 1, 0), 1, 0.4, 0.75, 3);
}
