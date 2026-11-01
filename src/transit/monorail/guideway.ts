import * as THREE from 'three';
import type { Kit } from '../../strip/kit';
import type { Path } from '../path';

/** Least beam soffit height above the ground (m). */
export const DECK = 10;
const PIER_STEP = 36;
const CONCRETE = '#c9c3b8';

/**
 * The monorail's guideway: a slim precast beam, 0.66 m wide and 1.5 m deep,
 * following the line's height profile on T-piers, each track its own beam.
 */
export function buildGuideway(k: Kit, path: Path) {
  const p = path.pts;
  const ys = path.ys!;
  const beam = new THREE.BoxGeometry(1, 1.5, 0.66).translate(0, 0.75, 0);
  const rail = new THREE.BoxGeometry(1, 0.08, 0.5).translate(0, 1.54, 0);
  let run = 0;
  for (let i = 1; i < p.length / 2; i++) {
    const ax = p[i * 2 - 2], az = p[i * 2 - 1], bx = p[i * 2], bz = p[i * 2 + 1];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 0.3 || len > 60) continue;
    const deg = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI + 180;
    const fr = k.frame((ax + bx) / 2, (az + bz) / 2, deg);
    const mid = (ys[i - 1] + ys[i]) / 2 - fr.o.y;
    const m = new THREE.Matrix4()
      .makeTranslation(0, mid, 0)
      .multiply(new THREE.Matrix4().makeRotationZ(Math.atan2(ys[i] - ys[i - 1], len)))
      .multiply(new THREE.Matrix4().makeScale(len + 0.4, 1, 1));
    k.geoM(fr, beam.clone(), m, CONCRETE, { rough: 0.8 });
    k.geoM(fr, rail.clone(), m, '#8a8a88', { rough: 0.5 });
    for (run += len; run > PIER_STEP; run -= PIER_STEP) {
      const t = 1 - (run - PIER_STEP) / len;
      const x = (t - 0.5) * len;
      const top = ys[i - 1] + (ys[i] - ys[i - 1]) * t - fr.o.y;
      k.box(fr, x, -0.5, 0, 1.2, top + 0.5, 1.2, CONCRETE, { rough: 0.85 });
      k.box(fr, x, top - 0.9, 0, 1.6, 0.9, 1.8, CONCRETE, { rough: 0.85 });
    }
  }
}
