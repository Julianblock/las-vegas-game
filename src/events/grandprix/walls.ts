import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { circuitBuilt } from '../calendar';
import { today } from '../today';
import { BAY, barrierGeometry } from './barrier';
import { CIRCUIT, TRACK_HALF } from './circuit';
import { blank } from './loop';

/** Concrete walls and catch fences lining both sides of the street circuit. */
export class CircuitWalls implements Show {
  readonly object: THREE.InstancedMesh;

  constructor(hf: Heightfield) {
    const bays = Math.floor(CIRCUIT.length / BAY);
    this.object = new THREE.InstancedMesh(barrierGeometry(), instancedMaterial(), bays * 2);
    this.object.frustumCulled = false;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    const up = new THREE.Vector3(0, 1, 0);
    const p = blank();
    let i = 0;
    for (let b = 0; b < bays; b++) {
      CIRCUIT.sample((b + 0.5) * BAY, p);
      const yaw = Math.atan2(-p.tz, p.tx);
      for (const side of [1, -1]) {
        const x = p.x + p.nx * TRACK_HALF * side, z = p.z + p.nz * TRACK_HALF * side;
        q.setFromAxisAngle(up, side > 0 ? yaw : yaw + Math.PI);
        this.object.setMatrixAt(i++, m.compose(v.set(x, hf.height(x, z), z), q, one));
      }
    }
  }

  update() {
    this.object.visible = circuitBuilt(today.month, today.day);
  }
}
