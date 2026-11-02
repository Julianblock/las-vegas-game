import * as THREE from 'three';
import { movingMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import type { Heightfield } from '../../world/heightfield';
import { lionDancing } from '../calendar';
import { today } from '../today';
import { lionGeometry } from './lion';
import { PLAZA } from './plaza';

const COATS: [string, string][] = [
  ['#e02020', '#f0c030'],
  ['#f0c030', '#e02020'],
  ['#20a050', '#f0f0f0'],
];

/** Lions prowling the plaza to the drum: bobbing, weaving, and now and then rearing up. */
export class LionDance implements Show {
  readonly object = new THREE.Group();
  private lions: THREE.Mesh[];
  private ground: number;

  constructor(hf: Heightfield) {
    this.ground = hf.height(PLAZA.x, PLAZA.z);
    this.lions = COATS.map(([c, t]) => new THREE.Mesh(lionGeometry(c, t), movingMaterial()));
    this.object.add(...this.lions);
  }

  update(_dt: number, clock: number) {
    this.object.visible = lionDancing(today.month, today.day, today.hours);
    if (!this.object.visible) return;
    this.lions.forEach((lion, i) => {
      const a = clock * 0.18 + (i * Math.PI * 2) / this.lions.length;
      const weave = Math.sin(clock * 0.9 + i) * 2;
      const r = PLAZA.r + weave;
      lion.position.set(PLAZA.x + Math.cos(a) * r, this.ground, PLAZA.z + Math.sin(a) * r);
      // Rear up on the beat every so often, the front dancer lifted on the rear one's thighs.
      const rear = Math.max(0, Math.sin(clock * 0.35 + i * 2.1)) ** 8;
      lion.position.y += Math.abs(Math.sin(clock * 4 + i)) * 0.12 + rear * 0.6;
      lion.rotation.set(-rear * 0.5, -a + Math.sin(clock * 2.3 + i) * 0.35, Math.sin(clock * 3 + i) * 0.06);
    });
  }
}
