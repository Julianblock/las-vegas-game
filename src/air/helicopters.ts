import * as THREE from 'three';
import { LightPoints } from '../render/lightPoints';
import type { Heightfield } from '../world/heightfield';
import { instancedMaterial } from '../strip/shows/materials';
import type { Show } from '../strip/shows/show';
import { helicopterGeometry, rotorGeometry } from './helicopter';
import { TOUR_LENGTH, tourAt } from './tour';

const COUNT = 5;
/** Tour cruise: about 110 knots, 250 m over the Strip. */
const SPEED = 55;
const CRUISE = 250;
const LIVERIES: [string, string][] = [
  ['#f2f2f2', '#1b4fa0'],
  ['#111318', '#c9a227'],
  ['#e8e4dc', '#b3202a'],
  ['#1f3d7a', '#f2f2f2'],
  ['#f5c400', '#121212'],
];

/** Tour helicopters lapping the Strip, rotors turning, beacons blinking. */
export class Helicopters implements Show {
  readonly object = new THREE.Group();
  private readonly bodies: THREE.InstancedMesh[];
  private readonly rotor: THREE.InstancedMesh;
  private readonly lights: LightPoints;
  private readonly s: number[] = [];
  private readonly at = { x: 0, z: 0, hx: 1, hz: 0 };
  private readonly m = new THREE.Matrix4();
  private readonly q = new THREE.Quaternion();
  private readonly qr = new THREE.Quaternion();
  private readonly v = new THREE.Vector3();
  private readonly up = new THREE.Vector3(0, 1, 0);
  private readonly fwd = new THREE.Vector3(0, 0, 1);
  private readonly one = new THREE.Vector3(1, 1, 1);
  private spin = 0;

  constructor(private readonly hf: Heightfield) {
    const mat = instancedMaterial();
    this.bodies = LIVERIES.slice(0, COUNT).map(([a, b]) => {
      const mesh = new THREE.InstancedMesh(helicopterGeometry(a, b), mat, 1);
      mesh.frustumCulled = false;
      this.object.add(mesh);
      return mesh;
    });
    this.rotor = new THREE.InstancedMesh(rotorGeometry(), mat, COUNT);
    this.rotor.frustumCulled = false;
    this.object.add(this.rotor);
    const data: number[] = [];
    for (let i = 0; i < COUNT; i++) {
      this.s.push((i / COUNT) * TOUR_LENGTH);
      data.push(0, -1e4, 0, 1, 0.1, 0.05, 3, 1);
      data.push(0, -1e4, 0, 1, 1, 1, 2, 1);
    }
    this.lights = new LightPoints(data, true);
    this.object.add(this.lights.points);
  }

  update(dt: number) {
    const step = Math.min(dt, 0.1);
    this.spin += step * 40;
    const a = this.at;
    for (let i = 0; i < COUNT; i++) {
      this.s[i] = (this.s[i] + step * SPEED) % TOUR_LENGTH;
      const s = this.s[i];
      tourAt(s, a);
      const ground = this.hf.height(a.x, a.z);
      const fromPad = Math.min(s, TOUR_LENGTH - s);
      const y = ground + Math.min(CRUISE, 2 + fromPad * 0.25);
      this.q.setFromAxisAngle(this.up, Math.atan2(-a.hz, a.hx));
      this.qr.setFromAxisAngle(this.fwd, -0.08 * Math.min(1, fromPad / 300));
      this.q.multiply(this.qr);
      this.bodies[i].setMatrixAt(0, this.m.compose(this.v.set(a.x, y, a.z), this.q, this.one));
      this.bodies[i].instanceMatrix.needsUpdate = true;
      this.qr.setFromAxisAngle(this.up, this.spin + i);
      this.rotor.setMatrixAt(i, this.m.compose(this.v.set(a.x - a.hx * 0.2, y + 2.3, a.z - a.hz * 0.2), this.qr, this.one));
      this.lights.write(i * 2, a.x - a.hx * 1.4, y + 1.8, a.z - a.hz * 1.4, 1, 0.1, 0.05, 3);
      this.lights.write(i * 2 + 1, a.x - a.hx * 8.6, y + 0.6, a.z - a.hz * 8.6, 1, 1, 1, 2);
    }
    this.rotor.instanceMatrix.needsUpdate = true;
    this.lights.commit(COUNT * 2);
  }
}
