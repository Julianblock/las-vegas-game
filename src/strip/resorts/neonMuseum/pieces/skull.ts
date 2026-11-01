import * as THREE from 'three';
import type { Piece } from '../piece';

/** Treasure Island\u2019s pirate skull and crossbones (1993), from the old marquee over the Strip. */
export const skull: Piece = {
  build(k, fr) {
    const x = 22, z = -4, y = 0.5;
    const bone = '#e8e0cc';
    k.geo(fr, new THREE.SphereGeometry(2, 18, 12).scale(1, 1.05, 0.95), x, y + 3.2, z, bone, { rough: 0.7 });
    k.box(fr, x, y + 0.6, z, 2.4, 1.2, 2.2, bone, { rough: 0.7 });
    for (const s of [-1, 1]) {
      k.geo(fr, new THREE.SphereGeometry(0.55, 10, 8), x - 1.6, y + 3.3, z + s * 0.75, '#111111', { rough: 0.9 });
      k.geo(fr, new THREE.CylinderGeometry(0.3, 0.3, 7, 8).rotateX(Math.PI / 2).rotateY(s * 0.7), x + 0.6, y + 0.9, z, bone, { rough: 0.7 });
    }
    k.geo(fr, new THREE.ConeGeometry(0.35, 0.6, 3).rotateZ(Math.PI / 2), x - 1.95, y + 2.6, z, '#111111', { rough: 0.9 });
  },
};
