import * as THREE from 'three';
import type { Heightfield } from '../../world/heightfield';
import { instancedMaterial } from '../../strip/shows/materials';
import type { Show } from '../../strip/shows/show';
import { STRIP_HALF, stripX } from '../../strip/streets';
import { isNewYearsEve } from '../calendar';
import { today } from '../today';
import { revellerGeometry } from './reveller';

/** Party tops: sequins, black, white, gold, red, and the odd glowing necklace colour. */
const TOPS = ['#111111', '#f2f2f2', '#d4af37', '#c8102e', '#1d3a8a', '#7a1fd0', '#c0c0c0', '#2a8a5a'];

/** The packed stretch, from the Venetian south past Planet Hollywood to the MGM Grand. */
const FROM = -1100;
const TO = 1600;
const STEP = 3.2;

function rand(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/** Hundreds of thousands in the boulevard on New Year's Eve, here a dense field of revellers. */
export class Revellers implements Show {
  readonly object = new THREE.Group();

  constructor(hf: Heightfield) {
    const r = rand(1231);
    const spots: [number, number, number, number][] = [];
    for (let z = FROM; z < TO; z += STEP) {
      const cx = stripX(z);
      for (let o = -STRIP_HALF + 4; o < STRIP_HALF - 4; o += STEP) {
        if (r() < 0.2) continue;
        const x = cx + o + (r() - 0.5) * 2.4, zz = z + (r() - 0.5) * 2.4;
        spots.push([x, zz, r() * Math.PI * 2, Math.floor(r() * TOPS.length * 4)]);
      }
    }
    const mat = instancedMaterial();
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    for (let k = 0; k < TOPS.length * 4; k++) {
      const mine = spots.filter((s) => s[3] === k);
      const mesh = new THREE.InstancedMesh(revellerGeometry(TOPS[k % TOPS.length], k >> 3), mat, Math.max(1, mine.length));
      mesh.frustumCulled = false;
      mine.forEach(([x, z, yaw], i) => {
        q.setFromAxisAngle(up, yaw);
        mesh.setMatrixAt(i, m.compose(v.set(x, hf.height(x, z), z), q, sc.setScalar(0.92 + ((i * 37) % 17) / 100)));
      });
      mesh.count = mine.length;
      this.object.add(mesh);
    }
  }

  update() {
    this.object.visible = isNewYearsEve(today.month, today.day, today.hours);
  }
}
