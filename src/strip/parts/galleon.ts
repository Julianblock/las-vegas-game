import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

export interface GalleonSpec {
  length: number;
  hull: string;
  trim: string;
  sail: string;
  masts?: number;
}

/**
 * A three-masted galleon along local x at (x, z), waterline at y: tumblehome
 * hull, raised sterncastle and forecastle, square sails on the yards, lit
 * stern lanterns.
 */
export function galleon(k: Kit, fr: Frame, x: number, z: number, y: number, s: GalleonSpec) {
  const L = s.length;
  const B = L * 0.24;
  k.box(fr, x, y - 2, z, L * 0.86, 3.5, B * 0.8, s.hull, { rough: 0.7 });
  k.box(fr, x, y + 1.5, z, L, 3, B, s.hull, { rough: 0.7 });
  k.box(fr, x, y + 4.4, z, L * 1.01, 0.4, B * 1.02, s.trim, { rough: 0.5 });
  k.box(fr, x - L * 0.38, y + 4.5, z, L * 0.26, 4.2, B * 0.96, s.hull, { rough: 0.7 });
  k.box(fr, x - L * 0.38, y + 8.7, z, L * 0.27, 0.35, B, s.trim, { rough: 0.5 });
  k.box(fr, x + L * 0.4, y + 4.5, z, L * 0.18, 2.4, B * 0.9, s.hull, { rough: 0.7 });
  k.tube(fr, new THREE.Vector3(x + L * 0.48, y + 5, z), new THREE.Vector3(x + L * 0.78, y + 9, z), 0.35, s.trim, 0);
  const masts = s.masts ?? 3;
  for (let i = 0; i < masts; i++) {
    const mx = x + L * (0.28 - i * 0.26);
    const mh = L * (i === 1 ? 0.95 : 0.8);
    k.cyl(fr, mx, y + 4, z, 0.45, 0.3, mh, '#4a3422', { rough: 0.8 }, 6);
    for (let j = 0; j < 3; j++) {
      const sy = y + 8 + j * mh * 0.28;
      const sw = B * (1.6 - j * 0.35);
      k.box(fr, mx, sy + mh * 0.22, z, 0.3, 0.3, sw * 1.1, '#3a2a1a', { rough: 0.8 });
      k.box(fr, mx + 0.4, sy, z, 0.15, mh * 0.21, sw, s.sail, { rough: 0.9 });
    }
    k.box(fr, mx, y + 4 + mh, z + 1.2, 0.1, 1.4, 2.4, '#141414', { rough: 0.9 });
  }
  for (const sz of [-1, 1]) k.light(fr.p(x - L * 0.5, y + 7.5, z + sz * B * 0.3), 1, 0.7, 0.35, 1.8);
  for (let i = -4; i <= 4; i++) for (const sz of [-1, 1]) k.box(fr, x + i * L * 0.08, y + 1.2, z + sz * B * 0.5, 0.9, 0.7, 0.2, '#141010', { rough: 0.9 });
}
