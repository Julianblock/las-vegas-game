import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A square lattice column between two levels: four corner chords and X-bracing
 * on each face. `c0`/`c1` are the column's centre at the bottom and top,
 * `w0`/`w1` its side there, `bays` the number of braced panels.
 */
export function latticeColumn(k: Kit, fr: Frame, c0: THREE.Vector3, c1: THREE.Vector3, w0: number, w1: number, bays: number, r: number, color: string, glow = 0, fx = 0) {
  const corner = (t: number, i: number) => {
    const c = c0.clone().lerp(c1, t);
    const w = (w0 + (w1 - w0) * t) / 2;
    const sx = i === 0 || i === 3 ? -1 : 1;
    const sz = i < 2 ? -1 : 1;
    return new THREE.Vector3(c.x + sx * w, c.y, c.z + sz * w);
  };
  for (let i = 0; i < 4; i++) k.tube(fr, corner(0, i), corner(1, i), r, color, glow, fx);
  for (let b = 0; b < bays; b++) {
    const t0 = b / bays;
    const t1 = (b + 1) / bays;
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      k.tube(fr, corner(t0, i), corner(t1, j), r * 0.6, color, glow, fx);
      k.tube(fr, corner(t0, j), corner(t1, i), r * 0.6, color, glow, fx);
      k.tube(fr, corner(t1, i), corner(t1, j), r * 0.5, color, glow, fx);
    }
  }
}
