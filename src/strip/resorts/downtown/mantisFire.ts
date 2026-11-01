import * as THREE from 'three';
import { LightPoints } from '../../../render/lightPoints';
import type { Heightfield } from '../../../world/heightfield';
import type { Show } from '../../shows/show';
import { ANTENNAE, MANTIS } from './mantis';

const PER = 18;
/** Seconds between bursts, and how long each one roars. */
const EVERY = 7;
const BURST = 1.6;
const RISE = 9;

/** Propane flames shooting from the mantis's antennae, after dark only. */
export class MantisFire implements Show {
  readonly object: THREE.Points;
  private readonly lights: LightPoints;
  private readonly tips: THREE.Vector3[];
  private t = 0;

  constructor(hf: Heightfield) {
    const a = (MANTIS.deg * Math.PI) / 180;
    const rx = -Math.cos(a), rz = -Math.sin(a);
    const fx = Math.sin(a), fz = -Math.cos(a);
    const y0 = hf.height(MANTIS.x, MANTIS.z);
    this.tips = ANTENNAE.map(([x, y, z]) => new THREE.Vector3(MANTIS.x + x * rx + z * fx, y0 + y, MANTIS.z + x * rz + z * fz));
    const data: number[] = [];
    for (let i = 0; i < PER * this.tips.length; i++) data.push(0, -1e4, 0, 0, 0, 0, 0, 0);
    this.lights = new LightPoints(data, true);
    this.object = this.lights.points;
  }

  update(dt: number, _clock: number, night: number) {
    this.t = (this.t + dt) % EVERY;
    const on = night > 0.3 && this.t < BURST;
    this.tips.forEach((tip, j) => {
      for (let i = 0; i < PER; i++) {
        const n = j * PER + i;
        if (!on) {
          this.lights.write(n, 0, -1e4, 0, 0, 0, 0, 0);
          continue;
        }
        const f = (i / PER + this.t * 2.2) % 1;
        const fade = 1 - f;
        const wob = Math.sin(i * 12.9898 + this.t * 30) * 0.4 * f;
        this.lights.write(n, tip.x + wob, tip.y + f * RISE, tip.z - wob, 1, 0.45 * fade + 0.15, 0.08 * fade, 2.6 * (0.5 + fade));
      }
    });
    this.lights.commit(PER * this.tips.length);
  }
}
