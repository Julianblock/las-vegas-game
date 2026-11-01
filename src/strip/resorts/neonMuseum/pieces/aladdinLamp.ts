import * as THREE from 'three';
import type { Piece } from '../piece';

/** The Aladdin’s magic lamp, gold and nine metres long, from the hotel’s 1960s pylon. */
export const aladdinLamp: Piece = {
  build(k, fr) {
    const x = -4, z = -20, y = 0.8;
    const gold = { rough: 0.3, glow: 0.2 };
    k.box(fr, x, -0.5, z, 2.5, y + 0.5, 1.8, '#4a3a2a', { rough: 0.9 });
    k.geo(fr, new THREE.SphereGeometry(1, 18, 12).scale(2.4, 1.1, 1.6), x, y + 1.2, z, '#d4a032', gold);
    k.geo(fr, new THREE.CylinderGeometry(0.25, 0.7, 3.4, 10).rotateZ(-Math.PI / 2.6), x + 3.3, y + 1.9, z, '#d4a032', gold);
    k.geo(fr, new THREE.TorusGeometry(0.9, 0.18, 8, 16, Math.PI * 1.3).rotateZ(Math.PI * 0.35), x - 2.6, y + 1.5, z, '#d4a032', gold);
    k.geo(fr, new THREE.ConeGeometry(0.6, 1.2, 12), x, y + 2.8, z, '#d4a032', gold);
    k.geo(fr, new THREE.SphereGeometry(0.35, 8, 6), x + 4.7, y + 2.8, z, '#ffd27a', { glow: 1.6, rough: 0.3 });
  },
};
