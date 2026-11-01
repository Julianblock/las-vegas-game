import { FX, type Frame } from '../../world/builders';
import type { Kit } from '../kit';

export interface CasinoBlock {
  /** Footprint centre (world m) and the angle of its `w` side (radians, from +x toward +z). */
  x: number;
  z: number;
  ang: number;
  w: number;
  d: number;
  /** Casino podium storeys over the whole footprint. */
  podium: number;
  podiumColor: string;
  /** Hotel tower: size, offset from the footprint centre along w and d, storeys and colour. */
  tower?: { w: number; d: number; dx?: number; dz?: number; floors: number; color: string; fx?: number; wash?: number };
  /** Name sign on both long faces of the tower top (or the podium if there's no tower). */
  sign?: string;
  signH?: number;
}

/**
 * A downtown casino: a podium filling its lot and, usually, a hotel slab on
 * top with the name across its crown. The lot is reserved from filler
 * buildings. Returns the frame (local x along `w`) and the roof height.
 */
export function casinoBlock(k: Kit, b: CasinoBlock): { fr: Frame; roof: number } {
  const deg = (b.ang * 180) / Math.PI;
  const fr = k.frame(b.x, b.z, deg, b.w / 2, b.d / 2);
  const ph = b.podium * 4.5;
  k.box(fr, 0, -2, 0, b.w, ph + 2, b.d, b.podiumColor, { rough: 0.7, fx: FX.WINDOWS, glow: 0.4 });
  let roof = ph;
  let faceD = b.d, cx = 0, cz = 0;
  if (b.tower) {
    const t = b.tower;
    cx = t.dx ?? 0;
    cz = t.dz ?? 0;
    roof = k.slab(fr, cx, cz, t.w, t.d, t.floors, t.color, t.fx ?? FX.WINDOWS, t.wash ?? 0.5, 0, ph);
    faceD = t.d;
    k.beacons(fr, cx, cz, t.w * 0.8, roof);
  }
  if (b.sign) {
    const h = b.signH ?? 6;
    for (const side of [1, -1]) {
      k.sign(fr, b.sign, cx, roof - h * 0.8, cz + side * (faceD / 2 + 0.4), h, 1.4, FX.NEON, side > 0 ? 0 : Math.PI);
    }
  }
  return { fr, roof };
}
