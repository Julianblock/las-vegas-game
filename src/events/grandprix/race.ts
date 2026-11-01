import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { onTrack } from '../calendar';
import { today } from '../today';
import { carGeometry } from './car';
import { CIRCUIT } from './circuit';
import { LIVERIES } from './liveries';
import { blank } from './loop';
import { SpeedProfile } from './speeds';

const CARS_PER_TEAM = 2;

interface Racer {
  team: number;
  slot: number;
  s: number;
  pace: number;
  lane: number;
}

/** Twenty-two cars lapping the Strip Circuit under the lights on race weekend. */
export class Race implements Show {
  readonly object = new THREE.Group();
  private readonly meshes: THREE.InstancedMesh[] = [];
  private readonly racers: Racer[] = [];
  private readonly speeds = new SpeedProfile(CIRCUIT);
  private readonly p = blank();
  private readonly m = new THREE.Matrix4();
  private readonly q = new THREE.Quaternion();
  private readonly v = new THREE.Vector3();
  private readonly one = new THREE.Vector3(1, 1, 1);
  private readonly up = new THREE.Vector3(0, 1, 0);

  constructor(private readonly hf: Heightfield) {
    const mat = instancedMaterial();
    LIVERIES.forEach((l, team) => {
      const mesh = new THREE.InstancedMesh(carGeometry(l), mat, CARS_PER_TEAM);
      mesh.frustumCulled = false;
      this.meshes.push(mesh);
      this.object.add(mesh);
      for (let slot = 0; slot < CARS_PER_TEAM; slot++) {
        const pos = this.racers.length;
        this.racers.push({ team, slot, s: -pos * 24, pace: 1 - pos * 0.0025, lane: pos % 2 ? -2 : 2 });
      }
    });
  }

  update(dt: number) {
    this.object.visible = onTrack(today.month, today.day, today.hours);
    if (!this.object.visible) return;
    const step = Math.min(dt, 0.1);
    for (const r of this.racers) {
      r.s += this.speeds.at(r.s) * r.pace * step;
      const p = CIRCUIT.sample(r.s, this.p);
      const x = p.x + p.nx * r.lane, z = p.z + p.nz * r.lane;
      this.q.setFromAxisAngle(this.up, Math.atan2(-p.tz, p.tx));
      this.m.compose(this.v.set(x, this.hf.height(x, z) + 0.02, z), this.q, this.one);
      this.meshes[r.team].setMatrixAt(r.slot, this.m);
    }
    for (const mesh of this.meshes) mesh.instanceMatrix.needsUpdate = true;
  }
}
