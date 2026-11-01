import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

export const CAMPANILE = { x: 1680, z: -611 };

/**
 * The Campanile: St Mark's bell tower at 96 m, a brick shaft with pilaster
 * strips, the white arcaded belfry, the attic and the green pyramid spire
 * topped by the gilded archangel Gabriel.
 */
export function buildCampanile(k: Kit) {
  const fr = k.frame(CAMPANILE.x, CAMPANILE.z, 270, 9, 9);
  k.box(fr, 0, -0.5, 0, 13, 4.5, 13, '#e8e0d0', { rough: 0.8 });
  k.box(fr, 0, 4, 0, 12, 52, 12, '#9a5040', { rough: 0.9 });
  for (const s of [-1, 1]) for (const t of [-1, 1]) k.box(fr, s * 5.6, 4, t * 5.6, 1.2, 52, 1.2, '#844434', { rough: 0.9 });
  k.box(fr, 0, 56, 0, 13, 1.4, 13, '#efe8da', { rough: 0.7 });
  // Belfry: four arches a side.
  for (let i = 0; i < 4; i++) {
    const c = -4.5 + i * 3;
    for (const [dx, dz, w, d] of [[c, 6, 0.9, 0.9], [c, -6, 0.9, 0.9], [6, c, 0.9, 0.9], [-6, c, 0.9, 0.9]]) k.box(fr, dx, 57.4, dz, w, 9, d, '#f4eee2', { rough: 0.7 });
  }
  k.box(fr, 0, 57.4, 0, 9, 9, 9, '#2a2420', { glow: 0.5 });
  k.light(fr.p(0, 62, 0), 1, 0.85, 0.6, 5);
  k.box(fr, 0, 66.4, 0, 13, 1.6, 13, '#efe8da', { rough: 0.7 });
  k.box(fr, 0, 68, 0, 11, 7.5, 11, '#e6dccb', { rough: 0.8 });
  k.geo(fr, new THREE.ConeGeometry(7.6, 18, 4).rotateY(Math.PI / 4).translate(0, 9, 0), 0, 75.5, 0, '#5a8a6a', { rough: 0.6, fx: FX.METAL });
  k.box(fr, 0, 93, 0, 0.8, 1.5, 0.8, '#d8b050', { rough: 0.3, fx: FX.METAL });
  k.geo(fr, new THREE.ConeGeometry(0.7, 2.4, 6), 0, 94.5, 0, '#e8c060', { rough: 0.25, glow: 0.4, fx: FX.METAL });
  k.light(fr.p(0, 96, 0), 1, 0.1, 0.05, 3, 1);
}
