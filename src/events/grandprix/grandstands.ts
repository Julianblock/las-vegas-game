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
      // Local +z faces the track: right of travel for the left side, left for the right.
      const yaw = Math.atan2(-p.tz, p.tx) + (st.side > 0 ? 0 : Math.PI);
      const place = new THREE.Matrix4().makeRotationY(yaw).setPosition(x, hf.height(x, z), z);
      // Landmark solids are drawn in world space, so the placement is baked in.
      this.object.add(new THREE.Mesh(grandstandGeometry(st.len, st.rows, 77 + i * 131).applyMatrix4(place), mat));
    });
  }

  update() {
    this.object.visible = circuitBuilt(today.month, today.day);
  }
}
