import * as THREE from 'three';
import { LightPoints } from '../../render/lightPoints';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import type { Heightfield } from '../../world/heightfield';
import { lunarDecorated } from '../calendar';
import { today } from '../today';
import { lanternGeometry } from './lantern';
import { poleGeometry } from './pole';
import { lanternSpots, poleSpots } from './spots';

/** Chinatown dressed for the new year: red lantern poles down both sides of Spring Mountain. */
export class LunarLanterns implements Show {
  readonly object = new THREE.Group();
  private lanterns: THREE.InstancedMesh;
  private glow: LightPoints;

  constructor(hf: Heightfield) {
    const poles = poleSpots();
    const pm = new THREE.InstancedMesh(poleGeometry(), instancedMaterial(), poles.length);
    this.lanterns = new THREE.InstancedMesh(lanternGeometry(), instancedMaterial(), poles.length * 3);
    pm.frustumCulled = this.lanterns.frustumCulled = false;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    const up = new THREE.Vector3(0, 1, 0);
    const lights: number[] = [];
    let n = 0;
    poles.forEach((p, i) => {
      const y = hf.height(p.x, p.z);
      q.setFromAxisAngle(up, p.side > 0 ? Math.PI : 0);
      pm.setMatrixAt(i, m.compose(v.set(p.x, y, p.z), q, one));
      for (const [lx, ly, lz] of lanternSpots(p)) {
        this.lanterns.setMatrixAt(n++, m.compose(v.set(lx, y + ly, lz), q, one));
        lights.push(lx, y + ly - 0.64, lz, 1, 0.18, 0.08, 2.2, 0);
      }
    });
    this.glow = new LightPoints(lights);
    this.object.add(pm, this.lanterns, this.glow.points);
  }

  update(_dt: number, _clock: number, night: number) {
    this.object.visible = lunarDecorated(today.month, today.day);
    this.glow.points.visible = night > 0.3;
  }
}
