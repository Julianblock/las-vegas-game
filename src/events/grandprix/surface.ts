import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { circuitBuilt } from '../calendar';
import { today } from '../today';
import { CIRCUIT, TRACK_HALF } from './circuit';
import { ribbon } from './ribbon';

const ASPHALT = new THREE.Color('#2b2c2f');
const LINE = new THREE.Color('#e6e6e6');
const KERB_RED = new THREE.Color('#c8151b');
const KERB_WHITE = new THREE.Color('#ececec');

/** Turns tighter than this (radians per metre) get kerbs. */
const CORNER = 1 / 90;

/** Fresh asphalt, white edge lines, and red-and-white kerbs through the corners. */
export class TrackSurface implements Show {
  readonly object = new THREE.Group();

  constructor(hf: Heightfield) {
    const mat = instancedMaterial();
    const w = TRACK_HALF - 0.5;
    const asphalt = ribbon(hf, -w, w, 0.1, 4, () => ASPHALT);
    const corner = (s: number) => CIRCUIT.curvature(s, 10) > CORNER;
    const stripe = (s: number) => (Math.floor(s / 2) % 2 ? KERB_RED : KERB_WHITE);
    const parts = [asphalt];
    for (const side of [1, -1]) {
      parts.push(ribbon(hf, side * (w - 0.4), side * (w - 0.25), 0.12, 4, (s) => (corner(s) ? null : LINE)));
      parts.push(ribbon(hf, side * (w - 1.1), side * w, 0.12, 2, (s) => (corner(s) ? stripe(s) : null)));
    }
    for (const g of parts) this.object.add(new THREE.Mesh(g, mat));
  }

  update() {
    this.object.visible = circuitBuilt(today.month, today.day);
  }
}
