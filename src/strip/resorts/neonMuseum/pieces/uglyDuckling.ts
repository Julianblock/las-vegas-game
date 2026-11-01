import * as THREE from 'three';
import type { Piece } from '../piece';

/** The yellow duckling that sat on top of the Ugly Duckling used-car lot on the Boulevard. */
export const uglyDuckling: Piece = {
  build(k, fr) {
    const x = -20, z = -24, y = 0.4;
    const yellow = { rough: 0.6 };
    k.box(fr, x, -0.5, z, 3, y + 0.5, 2, '#4a4a4a', { rough: 0.9 });
    k.geo(fr, new THREE.SphereGeometry(1.4, 14, 10).scale(1.3, 0.9, 1), x, y + 1.3, z, '#f2c81a', yellow);
    k.geo(fr, new THREE.SphereGeometry(0.85, 12, 10), x - 1.2, y + 2.7, z, '#f2c81a', yellow);
    k.geo(fr, new THREE.ConeGeometry(0.3, 0.8, 8).rotateZ(Math.PI / 2), x - 2.3, y + 2.6, z, '#ff8a1a', yellow);
    for (const s of [-1, 1]) k.geo(fr, new THREE.SphereGeometry(0.12, 6, 4), x - 1.85, y + 2.95, z + s * 0.4, '#111111', { rough: 0.5 });
    k.geo(fr, new THREE.ConeGeometry(0.5, 1, 6).rotateZ(-Math.PI / 2.5), x + 1.9, y + 1.8, z, '#f2c81a', yellow);
  },
};
