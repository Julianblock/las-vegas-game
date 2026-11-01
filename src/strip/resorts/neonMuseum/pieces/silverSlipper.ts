import * as THREE from 'three';
import type { Piece } from '../piece';

/**
 * The Silver Slipper\u2019s giant rhinestone slipper (1950s), which turned on a
 * pole outside the casino where Howard Hughes, they say, had it stopped
 * because it shone into his bedroom at the Desert Inn.
 */
export const silverSlipper: Piece = {
  build(k, fr) {
    const x = 12, z = 18, y = 5.5;
    const silver = { rough: 0.25, glow: 0.15 };
    k.cyl(fr, x, -0.5, z, 0.25, 0.25, y, '#5a4a3a', { rough: 0.9 });
    k.geo(fr, new THREE.SphereGeometry(1, 16, 10).scale(2.6, 0.7, 1.1), x, y + 0.6, z, '#d8dce0', silver, 0.4);
    k.geo(fr, new THREE.SphereGeometry(1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2).scale(1.3, 1.2, 1.05), x - 1.1, y + 0.9, z + 0.45, '#c8ccd0', silver, 0.4);
    k.geo(fr, new THREE.CylinderGeometry(0.12, 0.3, 2, 8), x - 2.1, y - 0.3, z + 0.9, '#c8ccd0', silver);
    k.geo(fr, new THREE.SphereGeometry(0.5, 10, 8), x + 2.2, y + 1.2, z - 0.9, '#7ad0ff', { glow: 1.2, rough: 0.2 });
  },
};
