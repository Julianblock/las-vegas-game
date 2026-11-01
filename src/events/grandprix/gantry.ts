import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { SolidBuilder } from '../../world/builders';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { circuitBuilt } from '../calendar';
import { today } from '../today';
import { CIRCUIT, TRACK_HALF } from './circuit';
import { blank } from './loop';

const TRUSS = '#2a2c30';

/**
 * The start/finish gantry: a black truss over the grid on two legs, five
 * pairs of red start lights, and a white line painted across the track.
 * Built in local space (x along the track, z across), then set at s = 0.
 */
function gantryGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const span = TRACK_HALF * 2 + 1.4;
  for (const z of [-span / 2, span / 2]) s.add(new THREE.BoxGeometry(0.7, 8, 0.7).translate(0, 4, z), I, TRUSS, { rough: 0.5 });
  s.add(new THREE.BoxGeometry(1.0, 1.4, span + 0.7).translate(0, 7.6, 0), I, TRUSS, { rough: 0.5 });
  s.add(new THREE.BoxGeometry(0.2, 1.2, 4.2).translate(0.55, 6.4, 0), I, '#111214', { rough: 0.4 });
  for (let i = 0; i < 5; i++) {
    for (const y of [6.75, 6.15]) {
      s.add(new THREE.SphereGeometry(0.2, 10, 8).translate(0.7, y, -1.6 + i * 0.8), I, '#ff1a1a', { rough: 0.5, glow: 3 });
    }
  }
  s.add(new THREE.BoxGeometry(0.9, 0.04, span - 1.6).translate(0, 0.14, 0), I, '#f0f0f0', { rough: 0.8 });
  return s.build();
}

/** The start/finish gantry over the pit straight. */
export class StartGantry implements Show {
  readonly object: THREE.Mesh;

  constructor(hf: Heightfield) {
    const p = CIRCUIT.sample(0, blank());
    this.object = new THREE.Mesh(gantryGeometry(), instancedMaterial());
    this.object.position.set(p.x, hf.height(p.x, p.z), p.z);
    this.object.rotation.y = Math.atan2(-p.tz, p.tx);
  }

  update() {
    this.object.visible = circuitBuilt(today.month, today.day);
  }
}
