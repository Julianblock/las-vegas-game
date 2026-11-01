import * as THREE from 'three';
import { LightPoints } from '../render/lightPoints';
import type { Heightfield } from '../world/heightfield';
import { instancedMaterial } from '../strip/shows/materials';
import type { Show } from '../strip/shows/show';
import { airlinerGeometry } from './airliner';
import { AIRLINES } from './airlines';
import { arrival, blankPose, departure, type Pose } from './paths';
import { ARRIVALS, DEPARTURES, type Runway } from './runways';

/** Seconds between movements on each runway. */
const ARRIVE_EVERY = 95;
const DEPART_EVERY = 110;
const SLOTS_PER_RUNWAY = 3;
const LIGHTS = 3;

interface Flight {
  runway: Runway;
  arriving: boolean;
  airline: number;
  slot: number;
  t: number;
  period: number;
}

/**
 * Jets in and out of Harry Reid: a steady stream down the glideslope onto
 * 26L and 26R with their landing lights blazing, and departures off 1L and
 * 1R climbing out past the Strip.
 */
export class Jets implements Show {
  readonly object = new THREE.Group();
  private readonly meshes: THREE.InstancedMesh[];
  private readonly flights: Flight[] = [];
  private readonly lights: LightPoints;
  private readonly pose: Pose = blankPose();
  private readonly m = new THREE.Matrix4();
  private readonly q = new THREE.Quaternion();
  private readonly qp = new THREE.Quaternion();
  private readonly v = new THREE.Vector3();
  private readonly one = new THREE.Vector3(1, 1, 1);
  private readonly hidden = new THREE.Matrix4().makeScale(0, 0, 0);

  constructor(private readonly hf: Heightfield) {
    const counts = AIRLINES.map(() => 0);
    let n = 0;
    const add = (runway: Runway, arriving: boolean, period: number) => {
      for (let i = 0; i < SLOTS_PER_RUNWAY; i++) {
        const airline = (n * 7 + i * 3) % AIRLINES.length;
        const cycle = period * SLOTS_PER_RUNWAY;
        this.flights.push({ runway, arriving, airline, slot: counts[airline]++, t: ((i + n * 0.37) % SLOTS_PER_RUNWAY) * period - cycle * 0.3, period: cycle });
      }
      n++;
    };
    for (const r of ARRIVALS) add(r, true, ARRIVE_EVERY);
    for (const r of DEPARTURES) add(r, false, DEPART_EVERY);
    const mat = instancedMaterial();
    this.meshes = AIRLINES.map((a, i) => {
      const mesh = new THREE.InstancedMesh(airlinerGeometry(a), mat, Math.max(1, counts[i]));
      mesh.frustumCulled = false;
      for (let k = 0; k < mesh.count; k++) mesh.setMatrixAt(k, this.hidden);
      this.object.add(mesh);
      return mesh;
    });
    const data: number[] = [];
    for (let i = 0; i < this.flights.length; i++) {
      data.push(0, -1e4, 0, 1, 1, 0.95, 7, 0);
      data.push(0, -1e4, 0, 1, 0.1, 0.05, 2.5, 1);
      data.push(0, -1e4, 0, 1, 1, 1, 2.5, 1);
    }
    this.lights = new LightPoints(data, true);
    this.object.add(this.lights.points);
  }

  update(dt: number) {
    const step = Math.min(dt, 0.1);
    const p = this.pose;
    this.flights.forEach((f, i) => {
      f.t += step;
      if (f.t > f.period) f.t -= f.period;
      const mesh = this.meshes[f.airline];
      const live = f.t >= 0 && (f.arriving ? arrival(f.runway, f.t, this.hf, p) : departure(f.runway, f.t, this.hf, p));
      if (!live) {
        mesh.setMatrixAt(f.slot, this.hidden);
        for (let k = 0; k < LIGHTS; k++) this.lights.write(i * LIGHTS + k, 0, -1e4, 0, 0, 0, 0, 0);
        return;
      }
      this.q.setFromAxisAngle(this.v.set(0, 1, 0), Math.atan2(-p.hz, p.hx));
      this.qp.setFromAxisAngle(this.v.set(0, 0, 1), p.pitch);
      this.q.multiply(this.qp);
      mesh.setMatrixAt(f.slot, this.m.compose(this.v.set(p.x, p.y, p.z), this.q, this.one));
      const nose = 18;
      this.lights.write(i * LIGHTS, p.x + p.hx * nose, p.y - 1, p.z + p.hz * nose, p.lamps, p.lamps, p.lamps * 0.95, 7);
      this.lights.write(i * LIGHTS + 1, p.x, p.y + 2.2, p.z, 1, 0.1, 0.05, 2.5);
      this.lights.write(i * LIGHTS + 2, p.x - p.hx * 22, p.y + 0.5, p.z - p.hz * 22, 1, 1, 1, 2.5);
    });
    for (const mesh of this.meshes) mesh.instanceMatrix.needsUpdate = true;
    this.lights.commit(this.flights.length * LIGHTS);
  }
}
