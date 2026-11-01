import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { SolidBuilder } from '../../world/builders';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { circuitBuilt } from '../calendar';
import { today } from '../today';
import { CIRCUIT, TRACK_HALF } from './circuit';
import { blank } from './loop';

const SPACING = 45;

/** A temporary lighting mast: a grey pole leaning over the track with a bar of LED heads. Track along +z. */
function mastGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  s.add(new THREE.CylinderGeometry(0.12, 0.2, 14, 8).translate(0, 7, 0), I, '#8d9196', { rough: 0.5 });
  s.add(new THREE.BoxGeometry(0.15, 0.15, 3).translate(0, 14, 1.4), I, '#8d9196', { rough: 0.5 });
  for (const x of [-0.6, 0, 0.6]) {
    s.add(new THREE.BoxGeometry(0.5, 0.18, 0.5).translate(x, 13.85, 2.7), I, '#f4f7ff', { rough: 0.4, glow: 2.2 });
  }
  return s.build();
}

/** Masts down both sides of the circuit, alternating, so the race runs under white light. */
export class Floodlights implements Show {
  readonly object: THREE.InstancedMesh;

  constructor(hf: Heightfield) {
    const n = Math.floor(CIRCUIT.length / SPACING);
    this.object = new THREE.InstancedMesh(mastGeometry(), instancedMaterial(), n);
    this.object.frustumCulled = false;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    const up = new THREE.Vector3(0, 1, 0);
    const p = blank();
    for (let i = 0; i < n; i++) {
      CIRCUIT.sample(i * SPACING + 20, p);
      const side = i % 2 ? 1 : -1;
      const off = TRACK_HALF + 1.2;
      const x = p.x + p.nx * off * side, z = p.z + p.nz * off * side;
      // Local +z points back across the track at the racing line.
      q.setFromAxisAngle(up, Math.atan2(-p.nx * side, -p.nz * side));
      this.object.setMatrixAt(i, m.compose(v.set(x, hf.height(x, z), z), q, one));
    }
  }

  update() {
    this.object.visible = circuitBuilt(today.month, today.day);
  }
}
