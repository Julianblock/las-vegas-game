import * as THREE from 'three';
import { SolidBuilder } from '../../../world/builders';
import type { Heightfield } from '../../../world/heightfield';
import { instancedMaterial } from '../../shows/materials';
import type { Show } from '../../shows/show';

/** The outdoor canal loop (world x, z), inset from the lagoon's banks. */
const LOOP: [number, number][] = [[1718, -742], [1768, -742], [1770, -700], [1766, -656], [1720, -656], [1716, -700]];
const BOATS = 7;
const SPEED = 1.3;

function gondolaGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const hull = new THREE.BoxGeometry(11, 0.8, 1.4);
  const p = hull.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    // Upswept bow and stern, the hull pinched at each end.
    p.setY(i, p.getY(i) + 0.035 * x * x);
    p.setZ(i, p.getZ(i) * (1 - Math.abs(x) / 7));
  }
  hull.computeVertexNormals();
  s.add(hull, I, '#141414', { rough: 0.3 });
  s.add(new THREE.BoxGeometry(0.2, 1, 0.5).translate(5.3, 1.3, 0), I, '#c8c8c8', { rough: 0.3 });
  s.add(new THREE.BoxGeometry(2.2, 0.5, 1.1).translate(0, 0.6, 0), I, '#8a1a1a', { rough: 0.8 });
  // Gondolier: striped shirt, straw boater, oar.
  s.add(new THREE.CylinderGeometry(0.22, 0.26, 1.1, 8).translate(-4, 1.2, 0), I, '#f2f2f2', { rough: 0.8 });
  s.add(new THREE.CylinderGeometry(0.18, 0.18, 0.18, 8).translate(-4, 1.75, 0), I, '#1a2a6a', { rough: 0.8 });
  s.add(new THREE.SphereGeometry(0.16, 8, 6).translate(-4, 1.95, 0), I, '#c89a78', { rough: 0.8 });
  s.add(new THREE.CylinderGeometry(0.32, 0.32, 0.06, 10).translate(-4, 2.1, 0), I, '#e8d090', { rough: 0.8 });
  s.add(new THREE.BoxGeometry(0.06, 0.06, 3.6).rotateX(0.6).translate(-4.3, 1.1, 0.8), I, '#6a4a2a', { rough: 0.8 });
  // Two passengers.
  for (const x of [-0.5, 0.5]) s.add(new THREE.SphereGeometry(0.17, 8, 6).translate(x, 1.25, 0), I, '#b88a6a', { rough: 0.8 });
  return s.build();
}

/** Gondolas poled round the Venetian's outdoor canal, serenading. */
export class Gondolas implements Show {
  readonly object: THREE.InstancedMesh;
  private lens: number[] = [];
  private total = 0;
  private y: number;
  private m = new THREE.Matrix4();
  private q = new THREE.Quaternion();
  private e = new THREE.Euler();
  private v = new THREE.Vector3();
  private one = new THREE.Vector3(1, 1, 1);

  constructor(hf: Heightfield, water: (x: number, z: number) => number) {
    this.object = new THREE.InstancedMesh(gondolaGeometry(), instancedMaterial(), BOATS);
    this.object.frustumCulled = false;
    const level = water(1743, -700);
    this.y = Number.isFinite(level) && level > -1e5 ? level : hf.height(1743, -700) + 0.2;
    for (let i = 0; i < LOOP.length; i++) {
      const [ax, az] = LOOP[i];
      const [bx, bz] = LOOP[(i + 1) % LOOP.length];
      const l = Math.hypot(bx - ax, bz - az);
      this.lens.push(l);
      this.total += l;
    }
  }

  update(_dt: number, clock: number) {
    for (let b = 0; b < BOATS; b++) {
      let d = (clock * SPEED + (b / BOATS) * this.total) % this.total;
      let i = 0;
      while (d > this.lens[i]) d -= this.lens[i++];
      const [ax, az] = LOOP[i];
      const [bx, bz] = LOOP[(i + 1) % LOOP.length];
      const t = d / this.lens[i];
      this.v.set(ax + (bx - ax) * t, this.y + Math.sin(clock * 1.3 + b) * 0.05, az + (bz - az) * t);
      this.q.setFromEuler(this.e.set(0, -Math.atan2(bz - az, bx - ax), Math.sin(clock + b) * 0.02));
      this.object.setMatrixAt(b, this.m.compose(this.v, this.q, this.one));
    }
    this.object.instanceMatrix.needsUpdate = true;
  }
}
