import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { circuitBuilt } from '../calendar';
import { today } from '../today';
import { CIRCUIT, TRACK_HALF } from './circuit';
import { grandstandGeometry } from './grandstand';
import { blank } from './loop';
import { STANDS } from './stands';

/** Grandstands packed with fans along the circuit's straights. */
export class Grandstands implements Show {
  readonly object = new THREE.Group();

  constructor(hf: Heightfield) {
    const mat = instancedMaterial();
    const p = blank();
    STANDS.forEach((st, i) => {
      CIRCUIT.sample(st.s, p);
      const off = TRACK_HALF + 1.5;
      const x = p.x + p.nx * off * st.side, z = p.z + p.nz * off * st.side;
      const mesh = new THREE.Mesh(grandstandGeometry(st.len, st.rows, 77 + i * 131), mat);
      mesh.position.set(x, hf.height(x, z), z);
      // Local +z faces the track: right of travel for the left side, left for the right.
      mesh.rotation.y = Math.atan2(-p.tz, p.tx) + (st.side > 0 ? 0 : Math.PI);
      this.object.add(mesh);
    });
  }

  update() {
    this.object.visible = circuitBuilt(today.month, today.day);
  }
}
