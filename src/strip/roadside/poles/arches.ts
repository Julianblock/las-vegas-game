import * as THREE from 'three';
import { FX, type Frame } from '../../../world/builders';
import type { Kit } from '../../kit';
import type { Brand } from '../brand';

/** McDonald's: the golden arches, two lit parabolas forming the M, over a red cabinet on a pole. */
export function arches(k: Kit, fr: Frame, b: Brand) {
  const top = 12;
  k.cyl(fr, 0, -0.5, 0, 0.4, 0.34, top, '#d8d8d8', { rough: 0.5, fx: FX.METAL }, 8);
  k.box(fr, 0, top - 3.2, 0, 4.4, 2.2, 0.7, b.color, { rough: 0.5 });
  k.sign(fr, b.sign.name, 0, top - 2.1, 0.37, 2, 1.25, FX.NONE);
  k.sign(fr, b.sign.name, 0, top - 2.1, -0.37, 2, 1.25, FX.NONE, Math.PI);
  const base = top - 1;
  for (const x0 of [-2.4, 0]) {
    let prev: THREE.Vector3 | null = null;
    for (let i = 0; i <= 12; i++) {
      const t = i / 12;
      const p = new THREE.Vector3(x0 + t * 2.4, base + 4.2 * Math.sqrt(Math.sin(Math.PI * t)), 0);
      if (prev) k.tube(fr, prev, p, 0.26, '#ffc72c', 1.2);
      prev = p;
    }
  }
}
