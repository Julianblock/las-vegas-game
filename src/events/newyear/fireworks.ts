import * as THREE from 'three';
import { G } from '../../render/globals';
import type { Heightfield } from '../../world/heightfield';
import type { Show } from '../../strip/shows/show';
import { isNewYearsEve } from '../calendar';
import { today } from '../today';
import { fireworkFragment, fireworkVertex } from './fireworkShader';
import { ROOFTOPS, type Rooftop } from './rooftops';

const SHELLS_PER_ROOF = 7;
const STARS = 140;

function rand(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/** Fireworks off the resort rooftops up and down the Strip on New Year's Eve. */
export class Fireworks implements Show {
  readonly object: THREE.Points;
  private readonly material: THREE.ShaderMaterial;

  constructor(
    hf: Heightfield,
    roofs: Rooftop[] = ROOFTOPS,
    private readonly when: () => boolean = () => isNewYearsEve(today.month, today.day, today.hours),
    seed = 2027,
  ) {
    const r = rand(seed);
    const pos: number[] = [], shell: number[] = [], dir: number[] = [];
    for (const roof of roofs) {
      const y = hf.height(roof.x, roof.z) + roof.roof;
      for (let s = 0; s < SHELLS_PER_ROOF; s++) {
        const period = 5 + r() * 4, phase = r() * period;
        const height = 90 + r() * 110, hue = r();
        const speed = 28 + r() * 22;
        const ring = r() < 0.25;
        for (let i = 0; i <= STARS; i++) {
          pos.push(roof.x, y, roof.z);
          shell.push(phase, period, height, hue);
          if (i === 0) {
            dir.push(0, 1, 0, 0);
            continue;
          }
          // Peonies fill a sphere; ring shells throw a flat halo.
          const a = r() * Math.PI * 2;
          const c = ring ? (r() - 0.5) * 0.1 : r() * 2 - 1;
          const k = Math.sqrt(1 - c * c);
          dir.push(Math.cos(a) * k, c, Math.sin(a) * k, speed * (0.85 + r() * 0.15));
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aShell', new THREE.Float32BufferAttribute(shell, 4));
    g.setAttribute('aDir', new THREE.Float32BufferAttribute(dir, 4));
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: fireworkVertex,
      fragmentShader: fireworkFragment,
      uniforms: { ...G, uT: { value: 0 }, uOn: { value: 0 }, uPixelScale: { value: 800 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.object = new THREE.Points(g, this.material);
    this.object.frustumCulled = false;
    this.object.renderOrder = 11;
  }

  update(_dt: number, clock: number, night: number) {
    const on = this.when() ? night : 0;
    this.object.visible = on > 0.05;
    this.material.uniforms.uOn.value = on;
    this.material.uniforms.uT.value = clock;
  }
}
