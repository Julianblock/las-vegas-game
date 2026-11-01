import * as THREE from 'three';
import type { Kit } from '../../kit';

/** Where the mantis stands, outside Container Park on Fremont East, facing the street. */
export const MANTIS = { x: 4671, z: -5771, deg: 28 };

/** Antenna tips in the mantis's local frame, where the flames come out. */
export const ANTENNAE: [number, number, number][] = [
  [-1.6, 13.4, 3.6],
  [1.6, 13.4, 3.6],
];

const STEEL = '#6e4128';
const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/**
 * The 40-foot steel praying mantis from Burning Man that guards the entrance
 * to Downtown Container Park: four spindly legs, a long abdomen, raptorial
 * forelegs raised, bug eyes lit with LEDs, and antennae that shoot fire.
 */
export function buildMantis(k: Kit) {
  const fr = k.frame(MANTIS.x, MANTIS.z, MANTIS.deg, 6, 9);
  const t = (a: THREE.Vector3, b: THREE.Vector3, r = 0.35) => k.tube(fr, a, b, r, STEEL, 0);
  for (const s of [-1, 1]) {
    t(v(s * 3.4, 0, -4.5), v(s * 2.2, 4.8, -3.2));
    t(v(s * 2.2, 4.8, -3.2), v(s * 0.5, 5, -1.5));
    t(v(s * 3.6, 0, 1.5), v(s * 2.4, 5, 0.6));
    t(v(s * 2.4, 5, 0.6), v(s * 0.5, 5.6, 0));
    t(v(s * 0.6, 8.6, 1.3), v(s * 1.1, 7, 3.8), 0.3);
    t(v(s * 1.1, 7, 3.8), v(s * 0.8, 9.4, 4.6), 0.25);
    t(v(s * 0.3, 10.6, 2.6), v(...ANTENNAE[s < 0 ? 0 : 1]), 0.12);
    k.geo(fr, new THREE.SphereGeometry(0.75, 12, 8), s * 0.75, 10.2, 2.5, '#58ffb0', { glow: 2.4, rough: 0.2 });
  }
  t(v(0, 3.8, -8.5), v(0, 5.2, -1), 1.3);
  t(v(0, 5.2, -1.2), v(0, 9.4, 1.8), 0.6);
  k.geo(fr, new THREE.ConeGeometry(0.9, 1.6, 4).rotateX(Math.PI), 0, 10.4, 2.4, STEEL, { rough: 0.7 });
  k.cyl(fr, 0, -0.5, -1.5, 5, 5, 0.6, '#3a3632', { rough: 0.9 });
  k.gather(fr, 0, 6, 8, 14);
}
