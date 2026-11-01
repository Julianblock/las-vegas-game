import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { STRIP_HALF, stripX } from '../../strip/streets';
import { today } from '../today';
import { DOORS } from './doors';
import { pumpkinGeometry } from './pumpkin';

function rand(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/** October on the Strip: decorations go up mid-month and come down on November 1. */
export function decorated(month: number, day: number) {
  return (month === 10 && day >= 10) || (month === 11 && day === 1);
}

/** Piles of jack-o'-lanterns grinning at the boulevard outside each resort door. */
export class JackOLanterns implements Show {
  readonly object: THREE.InstancedMesh;

  constructor(hf: Heightfield) {
    const total = DOORS.reduce((a, d) => a + d.n, 0);
    this.object = new THREE.InstancedMesh(pumpkinGeometry(), instancedMaterial(), total);
    this.object.frustumCulled = false;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    let i = 0;
    for (const d of DOORS) {
      const r = rand(Math.round(d.z * 7 + 1000));
      const x0 = stripX(d.z) + d.side * (STRIP_HALF - 2.5);
      for (let k = 0; k < d.n; k++) {
        const x = x0 + (r() - 0.5) * 2, z = d.z + (r() - 0.5) * 6;
        const size = 0.5 + r() * 0.6;
        q.setFromAxisAngle(up, -d.side * Math.PI / 2 + (r() - 0.5) * 0.7);
        this.object.setMatrixAt(i++, m.compose(v.set(x, hf.height(x, z), z), q, sc.setScalar(size)));
      }
    }
  }

  update() {
    this.object.visible = decorated(today.month, today.day);
  }
}
