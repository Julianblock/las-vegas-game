import * as THREE from 'three';
import type { Heightfield } from '../../../world/heightfield';
import { SolidBuilder } from '../../../world/builders';
import { instancedMaterial } from '../../shows/materials';
import type { Show } from '../../shows/show';
import { onFremont } from './fremont';
import { ZIPLINE, ZOOMLINE, type Line } from './zipline';

const I = new THREE.Matrix4();

/** A face-down flyer, head along +x, hanging under the trolley at the origin. */
function flyerGeometry() {
  const s = new SolidBuilder();
  s.add(new THREE.BoxGeometry(1.0, 0.32, 0.42).translate(0.1, -1.3, 0), I, '#1a4ab0', { rough: 0.7 });
  s.add(new THREE.BoxGeometry(0.85, 0.22, 0.34).translate(-0.8, -1.32, 0), I, '#2a2a2a', { rough: 0.8 });
  s.add(new THREE.SphereGeometry(0.15, 8, 6).translate(0.75, -1.25, 0), I, '#e8202a', { rough: 0.4 });
  s.add(new THREE.BoxGeometry(0.05, 1.15, 0.05).translate(0, -0.6, 0), I, '#111111', { rough: 0.6 });
  s.add(new THREE.BoxGeometry(0.4, 0.18, 0.18), I, '#c0c0c0', { rough: 0.3 });
  return s.build();
}

/** A seated rider, facing +x, hanging under the trolley at the origin. */
function seatedGeometry() {
  const s = new SolidBuilder();
  s.add(new THREE.BoxGeometry(0.36, 0.62, 0.42).translate(0, -1.55, 0), I, '#d0702a', { rough: 0.7 });
  s.add(new THREE.BoxGeometry(0.6, 0.2, 0.36).translate(0.25, -1.9, 0), I, '#2a3a5a', { rough: 0.8 });
  s.add(new THREE.BoxGeometry(0.16, 0.5, 0.3).translate(0.55, -2.15, 0), I, '#2a3a5a', { rough: 0.8 });
  s.add(new THREE.SphereGeometry(0.15, 8, 6).translate(0, -1.1, 0), I, '#ffcc33', { rough: 0.4 });
  s.add(new THREE.BoxGeometry(0.05, 0.95, 0.05).translate(0, -0.5, 0), I, '#111111', { rough: 0.6 });
  s.add(new THREE.BoxGeometry(0.4, 0.18, 0.18), I, '#c0c0c0', { rough: 0.3 });
  return s.build();
}

interface Run {
  line: Line;
  off: number;
  t: number;
  mesh: THREE.InstancedMesh;
  slot: number;
}

/** Riders flying west under the canopy, a fresh launch every few seconds on each cable. */
export class Zipliners implements Show {
  readonly object = new THREE.Group();
  private readonly runs: Run[] = [];
  private readonly m = new THREE.Matrix4();
  private readonly q = new THREE.Quaternion();
  private readonly v = new THREE.Vector3();
  private readonly one = new THREE.Vector3(1, 1, 1);
  private readonly up = new THREE.Vector3(0, 1, 0);
  private readonly hidden = new THREE.Matrix4().makeScale(0, 0, 0);
  private readonly yaw: number;

  constructor(private readonly hf: Heightfield) {
    const mat = instancedMaterial();
    const lines: [Line, THREE.BufferGeometry][] = [[ZIPLINE, seatedGeometry()], [ZOOMLINE, flyerGeometry()]];
    for (const [line, geo] of lines) {
      const mesh = new THREE.InstancedMesh(geo, mat, line.offs.length);
      mesh.frustumCulled = false;
      this.object.add(mesh);
      line.offs.forEach((off, i) => this.runs.push({ line, off, t: i * 7.3, mesh, slot: i }));
    }
    const a = onFremont(0), b = onFremont(100);
    this.yaw = Math.atan2(b.z - a.z, a.x - b.x);
  }

  update(dt: number) {
    const step = Math.min(dt, 0.1);
    for (const r of this.runs) {
      const span = Math.abs(r.line.from - r.line.to);
      const ride = span / r.line.speed;
      r.t = (r.t + step) % (ride + 14);
      if (r.t > ride) {
        r.mesh.setMatrixAt(r.slot, this.hidden);
        continue;
      }
      const f = r.t / ride;
      const p = onFremont(r.line.from + (r.line.to - r.line.from) * f, r.off);
      const y = this.hf.height(p.x, p.z) + r.line.h + 1.2 - r.line.sag * Math.sin(Math.PI * f);
      this.q.setFromAxisAngle(this.up, this.yaw);
      r.mesh.setMatrixAt(r.slot, this.m.compose(this.v.set(p.x, y, p.z), this.q, this.one));
    }
    for (const r of this.runs) r.mesh.instanceMatrix.needsUpdate = true;
  }
}
