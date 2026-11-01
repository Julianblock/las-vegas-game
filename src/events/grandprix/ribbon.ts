import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { CIRCUIT } from './circuit';
import { blank } from './loop';

/**
 * A strip of geometry laid along the circuit between two lateral offsets
 * (metres left of the racing line), draped on the ground a little above it.
 * Vertex colour comes from paint(s), which can stripe it along its length.
 */
export function ribbon(hf: Heightfield, inner: number, outer: number, lift: number, step: number,
  paint: (s: number) => THREE.Color | null) {
  const pos: number[] = [], nrm: number[] = [], col: number[] = [], mat: number[] = [], idx: number[] = [];
  const p = blank();
  const n = Math.ceil(CIRCUIT.length / step);
  for (let i = 0; i < n; i++) {
    const s0 = i * step, s1 = Math.min(CIRCUIT.length, s0 + step);
    const c = paint(s0 + step / 2);
    if (!c) continue;
    const base = pos.length / 3;
    for (const s of [s0, s1]) {
      CIRCUIT.sample(s, p);
      for (const o of [inner, outer]) {
        const x = p.x + p.nx * o, z = p.z + p.nz * o;
        pos.push(x, hf.height(x, z) + lift, z);
        nrm.push(0, 1, 0);
        col.push(c.r, c.g, c.b);
        mat.push(0.85, 0, 0, 0);
      }
    }
    idx.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('aMat', new THREE.Float32BufferAttribute(mat, 4));
  g.setIndex(idx);
  g.computeBoundingSphere();
  return g;
}
