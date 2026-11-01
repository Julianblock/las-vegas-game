import * as THREE from 'three';
import { G } from '../../../render/globals';
import { today } from '../../../events/today';
import type { Heightfield } from '../../../world/heightfield';
import type { Show } from '../../shows/show';
import { exosphereFragment, exosphereVertex } from './exosphereShader';

/** Sphere (2023): 157 m across, 112 m tall, the bowl sunk into its plinth. */
export const SPHERE = { x: 2514, z: -580, r: 78.5, h: 112 };
const PROGRAM_SECONDS = 24;

/** Halloween and the week before it: the Sphere turns into a jack-o'-lantern more often. */
const halloween = () => today.month === 10 && today.day >= 24;
const raceWeek = () => today.month === 11 && today.day >= 14 && today.day <= 23;
const independence = () => today.month === 7 && today.day >= 2 && today.day <= 5;
const christmas = () => today.month === 12 && today.day <= 25;
const valentine = () => today.month === 2 && today.day >= 12 && today.day <= 14;
const paddy = () => today.month === 3 && today.day >= 15 && today.day <= 17;
const holidays = () => (today.month === 12 && today.day >= 26) || (today.month === 1 && today.day === 1);
const SPOOKY = [1, 0, 1, 2, 1, 3, 1, 4];
const USUAL = [0, 2, 0, 3, 4, 1];
const RACE = [5, 0, 5, 2, 5, 3];
const PARTY = [6, 0, 6, 2, 6, 4];
const JULY4 = [7, 8, 7, 2, 8, 0];
const CHRISTMAS = [9, 12, 9, 0, 12, 2];
const VALENTINE = [10, 0, 10, 2];
const PADDY = [11, 0, 11, 2];
const USUAL_PLUS = [0, 2, 0, 3, 13, 4, 1];

/** The lit skin: cycles programs, faces the Strip, and fades between them. */
export class Exosphere implements Show {
  readonly object: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private playlist = USUAL;

  constructor(hf: Heightfield) {
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: exosphereVertex,
      fragmentShader: exosphereFragment,
      uniforms: {
        ...G,
        uMode: { value: this.playlist[0] },
        uFade: { value: 1 },
        uFace: { value: new THREE.Vector3(-1, 0.15, 0.25).normalize() },
        uLook: { value: new THREE.Vector3(-1, 0, 0) },
      },
    });
    const geo = new THREE.SphereGeometry(SPHERE.r, 96, 64, 0, Math.PI * 2, 0, Math.PI * 0.8);
    this.object = new THREE.Mesh(geo, this.material);
    this.object.position.set(SPHERE.x, hf.height(SPHERE.x, SPHERE.z) + SPHERE.h - SPHERE.r, SPHERE.z);
  }

  update(_dt: number, clock: number) {
    const slot = Math.floor(clock / PROGRAM_SECONDS);
    const t = clock - slot * PROGRAM_SECONDS;
    const u = this.material.uniforms;
    this.playlist = halloween() ? SPOOKY : raceWeek() ? RACE : independence() ? JULY4 : christmas() ? CHRISTMAS : valentine() ? VALENTINE : paddy() ? PADDY : holidays() ? PARTY : USUAL_PLUS;
    u.uMode.value = this.playlist[slot % this.playlist.length];
    u.uFade.value = Math.min(1, t / 1.2, (PROGRAM_SECONDS - t) / 1.2);
    // The eye glances up and down the Strip.
    const a = Math.sin(clock * 0.35) * 0.9 + Math.sin(clock * 1.7) * 0.15;
    u.uLook.value.set(-Math.cos(a), 0.12 + Math.sin(clock * 0.5) * 0.2, Math.sin(a)).normalize();
  }
}
