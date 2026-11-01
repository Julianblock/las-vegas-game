import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The Park (2016): the landscaped promenade from the Strip to the arena
 * between NYNY and Park MGM, shaded by steel "trees" of perforated
 * leaf-panels, and Bliss Dance, Marco Cochrane's 12 m dancing woman of
 * steel mesh, lit in shifting colour at night. Frame faces the Strip; +z east.
 */
export function buildPark(k: Kit) {
  const fr = k.frame(1300, 1385, 90);
  k.reserve(fr, 0, 0, 30, 170);
  k.box(fr, 0, -0.35, 0, 40, 0.4, 330, '#c8b8a0', { rough: 0.9 });
  for (let z = -150; z <= 150; z += 22) {
    for (const x of [-12, 12]) {
      const top = new THREE.Vector3(x, 11, z);
      k.tube(fr, new THREE.Vector3(x, 0, z), top, 0.35, '#5a4a3a', 0);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 + z * 0.1;
        k.box(fr, x + Math.cos(a) * 3, 11.5 + (i % 2) * 0.8, z + Math.sin(a) * 3, 5, 0.25, 3, '#c89a5a', { rough: 0.6, fx: FX.METAL }, a);
      }
    }
    k.light(fr.p(0, 4, z), 1, 0.8, 0.5, 2);
  }
  // Bliss Dance: a figure in mid-twirl, arms raised, on a low plinth.
  const bx = 0;
  const bz = 60;
  const mesh = { rough: 0.4, fx: FX.METAL, glow: 0.8 };
  k.cyl(fr, bx, -0.3, bz, 3, 3, 0.8, '#3a3a3a', { rough: 0.6 }, 16);
  k.tube(fr, new THREE.Vector3(bx, 0.5, bz), new THREE.Vector3(bx + 0.6, 5, bz), 0.4, '#a8b8d8', 0.8);
  k.tube(fr, new THREE.Vector3(bx + 0.6, 5, bz), new THREE.Vector3(bx + 0.4, 8.2, bz), 0.9, '#a8b8d8', 0.8);
  k.geo(fr, new THREE.SphereGeometry(0.75, 10, 8), bx + 0.4, 9.2, bz, '#a8b8d8', mesh);
  k.tube(fr, new THREE.Vector3(bx + 0.4, 8, bz), new THREE.Vector3(bx - 1.6, 11.6, bz + 0.3), 0.22, '#a8b8d8', 0.8);
  k.tube(fr, new THREE.Vector3(bx + 0.4, 8, bz), new THREE.Vector3(bx + 2.2, 11.2, bz - 0.4), 0.22, '#a8b8d8', 0.8);
  k.tube(fr, new THREE.Vector3(bx + 0.4, 4.6, bz), new THREE.Vector3(bx - 2.4, 1.8, bz + 0.6), 0.3, '#a8b8d8', 0.8);
  for (const [r, g, b] of [[1, 0.3, 0.8], [0.3, 0.6, 1]]) k.light(fr.p(bx, 6, bz + (r > 0.5 ? 2 : -2)), r, g, b, 4);
  k.gather(fr, 0, 60, 10, 20);
  k.walk(fr, [[0, 160], [0, 0], [0, -160]]);
}
