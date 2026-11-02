import { LightPoints } from '../../render/lightPoints';
import type { Show } from '../../strip/shows/show';
import type { Heightfield } from '../../world/heightfield';
import { lionDancing } from '../calendar';
import { today } from '../today';
import { CRACKERS } from './plaza';

const PER = 24;

/** Strings of firecrackers popping at the plaza corners to scare off the old year. */
export class Firecrackers implements Show {
  private lights: LightPoints;
  private ground: number[];
  get object() {
    return this.lights.points;
  }

  constructor(hf: Heightfield) {
    this.ground = CRACKERS.map(([x, z]) => hf.height(x, z));
    this.lights = new LightPoints(new Array(CRACKERS.length * PER * 8).fill(0), true);
  }

  update(_dt: number, clock: number) {
    this.object.visible = lionDancing(today.month, today.day, today.hours);
    if (!this.object.visible) return;
    let n = 0;
    CRACKERS.forEach(([x, z], c) => {
      for (let i = 0; i < PER; i++) {
        const h = Math.sin(i * 12.9898 + c * 78.233 + Math.floor(clock * 14) * 4.1) * 43758.5453;
        const pop = h - Math.floor(h);
        const on = pop > 0.7;
        const y = this.ground[c] + 0.3 + (i / PER) * 3;
        this.lights.write(n++, x + (pop - 0.5) * 0.8, y, z + (pop - 0.5) * 0.8, 1, 0.55 + pop * 0.4, 0.2, on ? 1.5 + pop * 2 : 0);
      }
    });
    this.lights.commit(n);
  }
}
