import * as THREE from 'three';
import { G } from '../render/globals';
import { LightPoints } from '../render/lightPoints';
import { propFragment, propVertex } from '../render/shaders/propShader';
import type { Heightfield } from '../world/heightfield';
import type { OsmData } from '../world/meta';
import { CAP, DENSITY, pick, zoneOf, type Zone } from './vehicles/mix';
import { V, VEHICLES } from './vehicles/types';

/** Free-flow speeds (m/s) and traffic density (vehicles per km) by road class. */
const ROAD: Record<string, { speed: number; density: number; rank: number }> = {
  motorway: { speed: 31, density: 4.5, rank: 6 },
  trunk: { speed: 30, density: 2.6, rank: 5 },
  primary: { speed: 25, density: 0.5, rank: 4 },
  secondary: { speed: 24, density: 0.4, rank: 3 },
  tertiary: { speed: 24, density: 0.35, rank: 2 },
  unclassified: { speed: 14, density: 0.05, rank: 1 },
  residential: { speed: 10, density: 0.06, rank: 0 },
};

interface Edge {
  pts: Float32Array;
  cum: Float32Array;
  len: number;
  a: number;
  b: number;
  name: string;
  kind: string;
  speed: number;
  oneway: number;
  lanes: number;
  zone: Zone;
}

interface Car {
  e: number;
  dir: number;
  s: number;
  seg: number;
  v: number;
  vt: number;
  type: number;
  slot: number;
  x: number;
  y: number;
  z: number;
  hx: number;
  hz: number;
  headlight: number;
}

function hash(n: number) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/** Vehicles driving the real road graph: cabs, limos and the Deuce crawling the Strip, rigs on I-15. */
export class Traffic {
  readonly group = new THREE.Group();
  readonly lights: LightPoints;
  readonly material: THREE.ShaderMaterial;
  private edges: Edge[] = [];
  private nodeEdges = new Map<number, number[]>();
  private cars: Car[] = [];
  private geos: THREE.InstancedBufferGeometry[] = [];
  private t0: Float32Array[] = [];
  private buckets = new Map<number, Car[]>();
  /** Streets shut to traffic, such as the Grand Prix circuit on race nights: cars there are hidden. */
  closed: ((x: number, z: number) => boolean) | null = null;

  constructor(osm: OsmData, private hf: Heightfield, radius = 48000) {
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: propVertex,
      fragmentShader: propFragment,
      uniforms: { ...G },
    });
    this.buildGraph(osm, radius);
    this.spawn();

    const bases = VEHICLES.map((v) => v.geo());
    const counts = VEHICLES.map(() => 0);
    for (const c of this.cars) c.slot = counts[c.type]++;
    bases.forEach((base, k) => {
      const n = Math.max(1, counts[k]);
      const g = new THREE.InstancedBufferGeometry();
      for (const name of Object.keys(base.attributes)) g.setAttribute(name, base.attributes[name]);
      const t0 = new Float32Array(n * 4);
      const t1 = new Float32Array(n * 4);
      const wall = new Float32Array(n * 4);
      const roof = new Float32Array(n * 4);
      const col = new THREE.Color();
      for (const c of this.cars) {
        if (c.type !== k) continue;
        const i = c.slot;
        const h = hash(i * 7.3 + k);
        // SUVs and minivans are just taller, boxier cars.
        const suv = k === V.CAR && h < 0.45;
        t1.set([suv ? 1.04 : 0.95 + h * 0.1, suv ? 1.22 : 1, suv ? 1.06 : 1, 5], i * 4);
        const type = VEHICLES[k];
        col.set(type.paint[Math.floor((type.slow ? h : hash(i * 3.1 + k)) * type.paint.length)]);
        wall.set([col.r, col.g, col.b, 0], i * 4);
        // The accent part (toppers, trim, roofs) takes its colour from the roof slot.
        if (type.accent) col.set(type.accent[Math.floor(hash(i * 5.7) * type.accent.length)]);
        roof.set(type.accent ? [col.r, col.g, col.b, h] : [0, 0, 0, h], i * 4);
      }
      const a0 = new THREE.InstancedBufferAttribute(t0, 4).setUsage(THREE.DynamicDrawUsage);
      g.setAttribute('aT0', a0);
      g.setAttribute('aT1', new THREE.InstancedBufferAttribute(t1, 4));
      g.setAttribute('aWall', new THREE.InstancedBufferAttribute(wall, 4));
      g.setAttribute('aRoof', new THREE.InstancedBufferAttribute(roof, 4));
      g.instanceCount = counts[k];
      const mesh = new THREE.Mesh(g, this.material);
      mesh.frustumCulled = false;
      this.group.add(mesh);
      this.geos.push(g);
      this.t0.push(t0);
    });

    this.lights = new LightPoints(new Array(this.cars.length * 4 * 8).fill(0), true);
    // Drivers switch their lamps on in murk as well as at night.
    this.lights.material.uniforms.uNight = { value: 0 };
    this.group.add(this.lights.points);
  }

  get count() {
    return this.cars.length;
  }

  /** Nearest vehicle to p: distance and speed. */
  nearest(p: THREE.Vector3) {
    let d = Infinity;
    let v = 0;
    for (const c of this.cars) {
      const dd = Math.hypot(c.x - p.x, c.y - p.y, c.z - p.z);
      if (dd < d) {
        d = dd;
        v = c.v;
      }
    }
    return { d, v };
  }

  private buildGraph(osm: OsmData, radius: number) {
    const nodeId = new Map<string, number>();
    const node = (x: number, z: number) => {
      const k = `${Math.round(x * 2)},${Math.round(z * 2)}`;
      let id = nodeId.get(k);
      if (id === undefined) {
        id = nodeId.size;
        nodeId.set(k, id);
      }
      return id;
    };
    for (const r of osm.roads) {
      const cls = ROAD[r.kind];
      if (!cls || r.pts.length < 4) continue;
      const p = r.pts;
      if (Math.hypot(p[0], p[1]) > radius) continue;
      const n = p.length / 2;
      const cum = new Float32Array(n);
      for (let i = 1; i < n; i++) cum[i] = cum[i - 1] + Math.hypot(p[i * 2] - p[i * 2 - 2], p[i * 2 + 1] - p[i * 2 - 1]);
      const len = cum[n - 1];
      if (len < 2) continue;
      const zone = zoneOf(r.name, r.kind, p[n & ~1], p[(n & ~1) + 1]);
      const speed = Math.min(cls.speed, CAP[zone]);
      const e: Edge = {
        pts: Float32Array.from(p),
        cum,
        len,
        a: node(p[0], p[1]),
        b: node(p[p.length - 2], p[p.length - 1]),
        name: r.name,
        kind: r.kind,
        speed,
        oneway: r.oneway ?? 0,
        lanes: r.lanes || (r.kind === 'motorway' ? 2 : 1),
        zone,
      };
      const id = this.edges.length;
      this.edges.push(e);
      for (const nd of [e.a, e.b]) {
        const l = this.nodeEdges.get(nd);
        if (l) l.push(id);
        else this.nodeEdges.set(nd, [id]);
      }
    }
  }

  private spawn() {
    let seed = 1;
    this.edges.forEach((e, id) => {
      const want = (e.len / 1000) * ROAD[e.kind].density * DENSITY[e.zone];
      let n = Math.floor(want) + (hash(id) < want % 1 ? 1 : 0);
      while (n-- > 0) {
        const h = hash(seed++);
        const dir = e.oneway ? e.oneway : h < 0.5 ? 1 : -1;
        const type = pick(e.zone, hash(seed++));
        const vt = e.speed * (0.88 + hash(seed++) * 0.22) * (type === V.SEMI ? 0.9 : 1);
        this.cars.push({ e: id, dir, s: hash(seed++) * e.len, seg: 0, v: vt, vt, type, slot: 0, x: 0, y: 0, z: 0, hx: 1, hz: 0, headlight: hash(seed++) });
      }
    });
  }

  /** Picks the next edge at a junction, favouring the same road and bigger roads. */
  private next(car: Car, nodeAt: number) {
    const cur = this.edges[car.e];
    const opts = this.nodeEdges.get(nodeAt) ?? [];
    let total = 0;
    const w: number[] = [];
    for (const id of opts) {
      const e = this.edges[id];
      let wt = 0;
      if (id !== car.e) {
        const dirOut = e.a === nodeAt ? 1 : -1;
        if (!e.oneway || e.oneway === dirOut) {
          wt = 0.4 + ROAD[e.kind].rank * 0.5;
          if (e.name && e.name === cur.name) wt *= 8;
          if (e.kind === 'residential' && cur.kind !== 'residential') wt *= 0.15;
        }
      }
      w.push(wt);
      total += wt;
    }
    if (total <= 0) {
      // Dead end: turn around (or respawn one-way traffic at its start).
      if (cur.oneway) {
        car.s = car.dir > 0 ? 0 : cur.len;
      } else {
        car.dir = -car.dir;
        car.s = car.dir > 0 ? 0 : cur.len;
      }
      return;
    }
    let r = Math.random() * total;
    let pick = opts[0];
    for (let i = 0; i < opts.length; i++) {
      r -= w[i];
      if (r <= 0) {
        pick = opts[i];
        break;
      }
    }
    const e = this.edges[pick];
    car.e = pick;
    car.dir = e.a === nodeAt ? 1 : -1;
    car.s = car.dir > 0 ? 0 : e.len;
    car.seg = car.dir > 0 ? 0 : e.pts.length / 2 - 2;
    car.vt = e.speed * (0.88 + Math.random() * 0.22) * (car.type === V.SEMI ? 0.9 : 1);
  }

  /**
   * @param lamps how brightly lamps burn (night, or murky weather by day)
   * @param pace  fraction of free-flow speed drivers keep (slower in rain and snow)
   */
  update(dt: number, camPos: THREE.Vector3, night: number, lamps = night, pace = 1) {
    dt = Math.min(dt, 0.1);
    this.lights.material.uniforms.uNight.value = lamps;
    // Simple car following within each edge and direction.
    this.buckets.clear();
    for (const c of this.cars) {
      const k = c.e * 2 + (c.dir > 0 ? 1 : 0);
      const b = this.buckets.get(k);
      if (b) b.push(c);
      else this.buckets.set(k, [c]);
    }
    for (const list of this.buckets.values()) {
      if (list.length < 2) continue;
      list.sort((p, q) => (p.s - q.s) * p.dir);
      for (let i = 0; i < list.length - 1; i++) {
        const me = list[i];
        const lead = list[i + 1];
        const gap = Math.abs(lead.s - me.s) - VEHICLES[lead.type].len;
        const safe = 6 + me.v * 1.6;
        if (gap < safe) me.v = Math.max(0, Math.min(me.v, lead.v * (gap / safe)));
      }
    }

    let li = 0;
    const lp = this.lights;
    for (const c of this.cars) {
      c.v += (c.vt * pace - c.v) * Math.min(1, dt * 0.5);
      let e = this.edges[c.e];
      c.s += c.v * dt * c.dir;
      if (c.s > e.len || c.s < 0) {
        this.next(c, c.s > e.len ? e.b : e.a);
        e = this.edges[c.e];
      }
      // Advance the cached segment index to bracket s.
      const n = e.pts.length / 2;
      let i = Math.min(Math.max(c.seg, 0), n - 2);
      while (i < n - 2 && e.cum[i + 1] < c.s) i++;
      while (i > 0 && e.cum[i] > c.s) i--;
      c.seg = i;
      const x0 = e.pts[i * 2];
      const z0 = e.pts[i * 2 + 1];
      const x1 = e.pts[i * 2 + 2];
      const z1 = e.pts[i * 2 + 3];
      const sl = e.cum[i + 1] - e.cum[i] || 1;
      const f = (c.s - e.cum[i]) / sl;
      const hx = ((x1 - x0) / sl) * c.dir;
      const hz = ((z1 - z0) / sl) * c.dir;
      // Smooth the heading so cars don't snap at polyline vertices.
      c.hx += (hx - c.hx) * Math.min(1, dt * 4);
      c.hz += (hz - c.hz) * Math.min(1, dt * 4);
      const hl = Math.hypot(c.hx, c.hz) || 1;
      const ux = c.hx / hl;
      const uz = c.hz / hl;
      // Keep right: divided roads drive on their own carriageway; on undivided
      // four-lane roads buses, limos and trucks hold the outside lane.
      const slow = !!VEHICLES[c.type].slow || c.headlight > 0.5;
      const lane = e.oneway ? (e.lanes > 1 ? (slow ? 1.8 : -1.8) : 0) : e.lanes >= 4 ? (slow ? 5.5 : 1.9) : 1.9;
      c.x = x0 + (x1 - x0) * f - uz * lane;
      c.z = z0 + (z1 - z0) * f + ux * lane;
      if (this.closed?.(c.x, c.z)) {
        const o = c.slot * 4, t0 = this.t0[c.type];
        t0[o] = c.x; t0[o + 1] = -1e4; t0[o + 2] = c.z; t0[o + 3] = 0;
        continue;
      }
      const dx = c.x - camPos.x;
      const dz = c.z - camPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < 8000 * 8000 || c.y === 0) c.y = this.hf.surface(c.x, c.z) + 0.2;
      const o = c.slot * 4, t0 = this.t0[c.type];
      t0[o] = c.x; t0[o + 1] = c.y; t0[o + 2] = c.z; t0[o + 3] = Math.atan2(uz, ux);

      if (lamps > 0.02 && d2 < 15000 * 15000) {
        const t = VEHICLES[c.type];
        const half = t.len / 2;
        // Headlights are directional: bright toward the viewer, faint from behind.
        const tcx = -dx / Math.sqrt(d2 + 1);
        const tcz = -dz / Math.sqrt(d2 + 1);
        const facing = ux * tcx + uz * tcz;
        // Lamps carry a long way down the straight valley boulevards.
        const front = 1.0 + 8.0 * Math.pow(Math.max(0, facing), 6);
        const rear = 0.6 + 1.2 * Math.max(0, -facing);
        const led = c.headlight < 0.45;
        const hr = led ? 0.85 : 1;
        const hg = led ? 0.92 : 0.82;
        const hb = led ? 1 : 0.58;
        for (const s of [-1, 1]) {
          const sx = -uz * t.lightZ * s;
          const sz = ux * t.lightZ * s;
          lp.write(li++, c.x + ux * half + sx, c.y + t.lightY, c.z + uz * half + sz, hr * front, hg * front, hb * front, 0.5);
          lp.write(li++, c.x - ux * half + sx, c.y + t.lightY + 0.1, c.z - uz * half + sz, rear, 0.03 * rear, 0.02 * rear, 0.4);
        }
      }
    }
    for (const g of this.geos) (g.attributes.aT0 as THREE.InstancedBufferAttribute).needsUpdate = true;
    lp.commit(li);
  }
}
