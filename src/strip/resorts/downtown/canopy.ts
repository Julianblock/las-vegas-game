import * as THREE from 'three';
import { G } from '../../../render/globals';
import type { Heightfield } from '../../../world/heightfield';
import type { Show } from '../../shows/show';
import { canopyFragment, canopyVertex } from './canopyShader';
import { FREMONT, onFremont } from './fremont';

/** Spring of the vault: edges and crown above the street (m); the crown is 90 ft up. */
const EAVE = 21;
const CROWN = 27.4;
const ALONG = 4;
const ACROSS = 16;

/** The Fremont Street Experience canopy (1995), a barrel vault of LEDs over five blocks. */
export class FremontCanopy implements Show {
  readonly object: THREE.Mesh;

  constructor(hf: Heightfield) {
    const len = onFremont(0).len;
    const half = FREMONT.width / 2;
    const pos: number[] = [], nrm: number[] = [], uv: number[] = [], idx: number[] = [];
    const rows = Math.ceil(len / ALONG);
    for (let i = 0; i <= rows; i++) {
      const t = Math.min(len, i * ALONG);
      const c = onFremont(t);
      const y0 = hf.height(c.x, c.z);
      for (let j = 0; j <= ACROSS; j++) {
        const u = (j / ACROSS) * 2 - 1;
        const p = onFremont(t, u * half);
        pos.push(p.x, y0 + EAVE + (CROWN - EAVE) * (1 - u * u), p.z);
        nrm.push(0, -1, 0);
        uv.push(u, t);
        if (i < rows && j < ACROSS) {
          const a = i * (ACROSS + 1) + j, b = a + ACROSS + 1;
          idx.push(a, b, a + 1, a + 1, b, b + 1);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    g.setAttribute('aUv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeBoundingSphere();
    this.object = new THREE.Mesh(g, new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: canopyVertex,
      fragmentShader: canopyFragment,
      uniforms: { ...G, uLen: { value: len } },
      side: THREE.DoubleSide,
    }));
  }

  update() {}
}
