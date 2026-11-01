import { FX } from '../../../world/builders';
import { FLOOR, type Kit } from '../../kit';

/** Arc the main tower is laid on: centre out over the lake, radius (m), half-angle. */
export const ARC = { cx: 1425, cz: 330, r: 200, half: 0.56 };
const SEGMENTS = 11;
const DEPTH = 26;
const CREAM = '#efe2c8';
const TILE = '#b8673e';

/**
 * Bellagio's main tower (1998): a terraced crescent cupped round the lake,
 * 36 storeys at the centre stepping down in Tuscan setbacks to each end,
 * each step capped in terracotta tile.
 */
export function buildBellagioTower(k: Kit) {
  const step = (2 * ARC.half) / SEGMENTS;
  const w = ARC.r * step + 1.5;
  for (let i = 0; i < SEGMENTS; i++) {
    const a = -ARC.half + (i + 0.5) * step;
    const x = ARC.cx - ARC.r * Math.cos(a);
    const z = ARC.cz + ARC.r * Math.sin(a);
    // Facing the lake: compass bearing from the segment toward the arc centre.
    const deg = (Math.atan2(ARC.cx - x, -(ARC.cz - z)) * 180) / Math.PI;
    const fr = k.frame(x, z, deg, w / 2, DEPTH / 2);
    const off = Math.abs(i - (SEGMENTS - 1) / 2);
    const floors = 36 - Math.round(off * 3);
    const top = k.slab(fr, 0, 0, w, DEPTH, floors, CREAM, FX.WINDOWS, 1.1);
    k.box(fr, 0, top, 0, w + 0.8, 1.2, DEPTH + 0.8, CREAM, { rough: 0.7 });
    k.box(fr, 0, top + 1.2, 0, w - 1, 2.4, DEPTH - 2, TILE, { rough: 0.85 });
    k.glow(fr, 0, DEPTH / 2, w, 0, top, 1, 0.82, 0.55);
    if (off === 0) {
      k.box(fr, 0, top + 3.6, 0, w * 0.6, 6, DEPTH * 0.6, CREAM, { rough: 0.7 });
      k.box(fr, 0, top + 9.6, 0, w * 0.5, 3, DEPTH * 0.5, TILE, { rough: 0.85 });
      k.sign(fr, 'bellagioCrown', 0, top - 6, DEPTH / 2 + 0.5, 6, 1.4, FX.NEON);
      k.beacons(fr, 0, 0, w * 0.5, top + 12.6);
    }
  }
}

/** Height of the main tower at its centre, for the fountain show and the camera. */
export const TOWER_TOP = 36 * FLOOR;
