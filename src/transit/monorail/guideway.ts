import type { Kit } from '../../strip/kit';
import type { Path } from '../path';

/** Beam soffit height above the ground (m). */
export const DECK = 10;
const PIER_STEP = 36;
const CONCRETE = '#c9c3b8';

/**
 * The monorail's guideway: a slim precast beam, 0.66 m wide and 1.5 m deep,
 * on T-piers, each of the two tracks its own beam.
 */
export function buildGuideway(k: Kit, path: Path) {
  const p = path.pts;
  let run = 0;
  for (let i = 2; i < p.length; i += 2) {
    const ax = p[i - 2], az = p[i - 1], bx = p[i], bz = p[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 0.3 || len > 80) continue;
    const deg = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI + 180;
    const fr = k.frame((ax + bx) / 2, (az + bz) / 2, deg);
    k.box(fr, 0, DECK, 0, len + 0.4, 1.5, 0.66, CONCRETE, { rough: 0.8 });
    k.box(fr, 0, DECK + 1.5, 0, len + 0.4, 0.08, 0.5, '#8a8a88', { rough: 0.5 });
    for (run += len; run > PIER_STEP; run -= PIER_STEP) {
      const t = 1 - (run - PIER_STEP) / len;
      const x = (t - 0.5) * len;
      k.box(fr, x, -0.5, 0, 1.2, DECK + 0.5, 1.2, CONCRETE, { rough: 0.85 });
      k.box(fr, x, DECK - 0.9, 0, 1.6, 0.9, 1.8, CONCRETE, { rough: 0.85 });
    }
  }
}
