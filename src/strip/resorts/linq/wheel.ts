import * as THREE from 'three';
import { FX, SolidBuilder } from '../../../world/builders';
import type { Heightfield } from '../../../world/heightfield';
import { instancedMaterial, movingMaterial } from '../../shows/materials';
import type { Show } from '../../shows/show';

/** The High Roller (2014): 167 m tall, 28 cabins, one turn every half hour (sped up here). */
export const WHEEL = { x: 1966, z: -171, hub: 86, r: 70, cabins: 28, yaw: Math.PI / 2 };
const TURN_SECONDS = 360;
const STEEL = '#e8ecef';

function rimGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  // Twin rims, a hub drum and 112 cable spokes (drawn as 56 light bars per side).
  for (const z of [-3.2, 3.2]) s.add(new THREE.TorusGeometry(WHEEL.r, 0.9, 6, 96).translate(0, 0, z), I, STEEL, { rough: 0.35, fx: FX.METAL });
  for (let i = 0; i < WHEEL.cabins; i++) {
    const a = (i / WHEEL.cabins) * Math.PI * 2;
    const m = new THREE.Matrix4().makeRotationZ(a).setPosition(Math.cos(a) * WHEEL.r, Math.sin(a) * WHEEL.r, 0);
    s.add(new THREE.BoxGeometry(1.2, 1.2, 7.2), m, STEEL, { rough: 0.35, fx: FX.METAL });
  }
  for (let i = 0; i < 56; i++) {
    const a = (i / 56) * Math.PI * 2;
    for (const z of [-3.2, 3.2]) {
      const g = new THREE.BoxGeometry(0.18, WHEEL.r - 6, 0.18).translate(0, (WHEEL.r - 6) / 2 + 6, 0);
      const m = new THREE.Matrix4().makeRotationZ(a - Math.PI / 2).setPosition(0, 0, z * 0.4);
      // Spokes carry the LED show after dark: a colour-chasing rainbow.
      s.add(g, m, '#f4f6ff', { rough: 0.3, glow: 0.7, fx: FX.CHASE });
    }
  }
  s.add(new THREE.CylinderGeometry(6, 6, 9, 24).rotateX(Math.PI / 2), I, STEEL, { rough: 0.35, fx: FX.METAL });
  return s.build();
}

function cabinGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const pod = new THREE.SphereGeometry(5.6, 16, 12);
  pod.scale(1, 0.92, 1);
  s.add(pod, I, '#9cc8e0', { rough: 0.05, glow: 0.35, fx: FX.GLASS });
  s.add(new THREE.CylinderGeometry(5.7, 5.7, 0.6, 16), I, '#d8dde0', { rough: 0.4 });
  s.add(new THREE.BoxGeometry(0.5, 3, 0.5).translate(0, 6, 0), I, STEEL, { rough: 0.4 });
  return s.build();
}

/** The turning rim, spokes and cabins (which stay level as the rim turns). */
export class HighRollerWheel implements Show {
  readonly object = new THREE.Group();
  private rim: THREE.Mesh;
  private cabins: THREE.InstancedMesh;
  private m = new THREE.Matrix4();

  constructor(hf: Heightfield) {
    this.object.position.set(WHEEL.x, hf.height(WHEEL.x, WHEEL.z) + WHEEL.hub, WHEEL.z);
    this.object.rotation.y = WHEEL.yaw;
    this.rim = new THREE.Mesh(rimGeometry(), movingMaterial());
    this.cabins = new THREE.InstancedMesh(cabinGeometry(), instancedMaterial(), WHEEL.cabins);
    this.rim.frustumCulled = this.cabins.frustumCulled = false;
    this.object.add(this.rim, this.cabins);
    this.update(0, 0);
  }

  update(_dt: number, clock: number) {
    const turn = (clock / TURN_SECONDS) * Math.PI * 2;
    this.rim.rotation.z = turn;
    for (let i = 0; i < WHEEL.cabins; i++) {
      const a = turn + (i / WHEEL.cabins) * Math.PI * 2;
      this.m.makeTranslation(Math.cos(a) * (WHEEL.r + 6.5), Math.sin(a) * (WHEEL.r + 6.5), 0);
      this.cabins.setMatrixAt(i, this.m);
    }
    this.cabins.instanceMatrix.needsUpdate = true;
  }
}
