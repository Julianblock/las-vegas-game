import * as THREE from 'three';
import { movingMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import type { Heightfield } from '../../world/heightfield';
import type { Path } from '../path';
import { CAR, carGeometry } from './car';
import { DECK } from './guideway';
import { LIVERIES } from './liveries';

const CARS = 4;
const TOP = 50 * 0.447;
const ACCEL = 1.1;
const DWELL = 28;

/** Distances along the loop where trains stop: each station once per track. */
export function stopsOn(path: Path, stations: { x: number; z: number }[], r = 45) {
  const out: number[] = [];
  const at = { x: 0, z: 0, dx: 0, dz: 0 };
  for (const st of stations) {
    let best = Infinity, bestS = 0;
    for (let s = 0; s < path.length; s += 2) {
      path.at(s, at);
      const d = Math.hypot(at.x - st.x, at.z - st.z);
      if (d < r && d < best) (best = d), (bestS = s);
      // Leaving a candidate run: keep its best and look for the other track.
      if (d >= r && best < Infinity) out.push(bestS), (best = Infinity);
    }
    if (best < Infinity) out.push(bestS);
  }
  return out.sort((a, b) => a - b);
}

interface Train {
  cars: THREE.Mesh[];
  s: number;
  v: number;
  dwell: number;
}

/**
 * The trains: four-car sets in wraps running the loop at up to 50 mph,
 * braking into each platform and waiting with the doors open.
 */
export class MonorailTrains implements Show {
  readonly object = new THREE.Group();
  private trains: Train[] = [];
  private p = { x: 0, z: 0, dx: 1, dz: 0 };

  constructor(
    private path: Path,
    private stops: number[],
    private hf: Heightfield,
    count = 7,
  ) {
    const mat = movingMaterial();
    for (let i = 0; i < count; i++) {
      const [livery, trim] = LIVERIES[i % LIVERIES.length];
      const head = carGeometry(livery, trim, true);
      const mid = carGeometry(livery, trim, false);
      const cars: THREE.Mesh[] = [];
      for (let c = 0; c < CARS; c++) {
        const m = new THREE.Mesh(c === 0 || c === CARS - 1 ? head : mid, mat);
        if (c === CARS - 1) m.scale.x = -1;
        m.frustumCulled = false;
        this.object.add(m);
        cars.push(m);
      }
      this.trains.push({ cars, s: (i / count) * path.length, v: 0, dwell: (i * 7) % DWELL });
    }
  }

  private nextStop(s: number) {
    for (const t of this.stops) if (t > s + 0.5) return t;
    return this.stops[0] + this.path.length;
  }

  update(dt: number) {
    dt = Math.min(dt, 0.1);
    for (const t of this.trains) {
      if (t.dwell > 0) t.dwell -= dt;
      else {
        const d = this.nextStop(t.s) - t.s;
        t.v = Math.min(t.v + ACCEL * dt, TOP, Math.sqrt(2 * ACCEL * Math.max(d - 0.3, 0)) + 0.2);
        t.s += Math.min(t.v * dt, d);
        if (d - t.v * dt < 0.4) (t.v = 0), (t.dwell = DWELL);
        t.s %= this.path.length;
      }
      for (let c = 0; c < t.cars.length; c++) {
        const at = this.path.at(t.s - CAR * (c + 0.5), this.p);
        const m = t.cars[c];
        m.position.set(at.x, this.hf.height(at.x, at.z) + DECK + 1.5, at.z);
        m.rotation.y = -Math.atan2(at.dz, at.dx);
      }
    }
  }
}
