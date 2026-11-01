import * as THREE from 'three';
import { G } from '../../render/globals';
import type { Heightfield } from '../../world/heightfield';
import { bellagioNozzles } from './fountainLayout';
import { fountainFragment, fountainVertex } from './fountainShader';
import { showTime } from './schedule';
import type { Show } from './show';

const LENGTH = 52;
const SEGMENTS = 10;

/** Two crossed unit ribbons, y 0..1, split vertically so they can bend. */
function ribbon() {
  const pos: number[] = [];
  const idx: number[] = [];
  for (const [ax, az] of [[1, 0], [0, 1]]) {
    const base = pos.length / 3;
    for (let i = 0; i <= SEGMENTS; i++) {
      const y = i / SEGMENTS;
      pos.push(-0.5 * ax, y, -0.5 * az, 0.5 * ax, y, 0.5 * az);
      if (i < SEGMENTS) {
        const a = base + i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
  }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}

/**
 * The Fountains of Bellagio (1998): shows to music across the lake, every
 * few minutes by day and more often after dark, lit white from below.
 */
export class BellagioFountains implements Show {
  readonly object: THREE.Mesh;
  private material: THREE.ShaderMaterial;

  constructor(hf: Heightfield, water: (x: number, z: number) => number) {
    const nozzles = bellagioNozzles();
    const geo = ribbon();
    const jet = new Float32Array(nozzles.length * 4);
    const u = new Float32Array(nozzles.length);
    nozzles.forEach((n, i) => {
      const y = Math.max(water(n.x, n.z), hf.height(n.x, n.z));
      jet.set([n.x, y, n.z, n.kind], i * 4);
      u[i] = n.u;
    });
    geo.setAttribute('aJet', new THREE.InstancedBufferAttribute(jet, 4));
    geo.setAttribute('aU', new THREE.InstancedBufferAttribute(u, 1));
    geo.instanceCount = nozzles.length;
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: fountainVertex,
      fragmentShader: fountainFragment,
      uniforms: { ...G, uShowT: { value: -1 }, uShowLen: { value: LENGTH } },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    this.object = new THREE.Mesh(geo, this.material);
    this.object.frustumCulled = false;
    this.object.renderOrder = 9;
  }

  update(_dt: number, clock: number, night: number) {
    const t = showTime(clock, night, LENGTH, 300, 150);
    this.material.uniforms.uShowT.value = t;
    this.object.visible = t >= 0;
  }
}
