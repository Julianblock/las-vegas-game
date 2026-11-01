import * as THREE from 'three';
import type { Kit } from '../../kit';
import { FREMONT, onFremont } from './fremont';

/**
 * SlotZilla's two runs west under the canopy: the seated zipline from the
 * lower deck, and the zoomline, flown face-down superhero-style from the top
 * of the machine all the way to the Plaza end.
 */
export interface Line {
  /** Metres along the mall (from Main Street) where it starts and ends. */
  from: number;
  to: number;
  /** Height above the street and offsets to the south side, one per cable. */
  h: number;
  offs: number[];
  /** Ride speed, m/s. */
  speed: number;
  /** Sag at mid-span under a rider (m). */
  sag: number;
}

const START = onFremont(0).len - 22;

export const ZIPLINE: Line = { from: START, to: START - 260, h: 11, offs: [-4.5, -2.5, 2.5, 4.5], speed: 9, sag: 1.2 };
export const ZOOMLINE: Line = { from: START, to: 40, h: 17, offs: [-1.5, -0.5, 0.5, 1.5], speed: 15, sag: 2.4 };

/** The steel cables, strung straight between the launch and the landing. */
export function buildCables(k: Kit) {
  const base = onFremont(0);
  const fr = k.frame(base.x, base.z, FREMONT.bearing);
  const y0 = k.y(base.x, base.z);
  for (const line of [ZIPLINE, ZOOMLINE]) {
    const a = onFremont(line.from), b = onFremont(line.to);
    const ya = k.y(a.x, a.z) + line.h - y0 + 1.2;
    const yb = k.y(b.x, b.z) + line.h - y0 + 1.2;
    for (const off of line.offs) {
      k.tube(fr, new THREE.Vector3(-off, ya, line.from), new THREE.Vector3(-off, yb, line.to), 0.06, '#9a9a9a', 0);
    }
    const end = onFremont(line.to);
    const lf = k.frame(end.x, end.z, FREMONT.bearing);
    const half = Math.abs(line.offs[0]) + 1.4;
    k.box(lf, 0, line.h - 2, 0, half * 2 + 0.6, 1.2, 3, '#2a2a2e', { rough: 0.5 });
    for (const s of [-1, 1]) k.box(lf, s * half, 0, 0, 0.6, line.h - 1, 0.6, '#3a3a3e', { rough: 0.5 });
  }
}
