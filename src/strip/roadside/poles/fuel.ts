import { FX, type Frame } from '../../../world/builders';
import type { Kit } from '../../kit';
import type { Brand } from '../brand';

/**
 * A filling station: the flat canopy in the brand's colour over two islands
 * of pumps, lit white underneath, and the price pylon at the kerb.
 * `fr` stands at the kerb; the canopy sits back from the street (local -x).
 */
export function fuel(k: Kit, fr: Frame, b: Brand) {
  const h = b.h ?? 2.4;
  const w = h * (k.rects[b.sign.name]?.aspect ?? 2);
  k.cyl(fr, 0, -0.5, 0, 0.3, 0.3, 7, '#d8d8d8', { rough: 0.5, fx: FX.METAL }, 8);
  k.box(fr, 0, 6.2, 0, w + 0.3, h + 0.3, 0.6, b.color, { rough: 0.5 });
  for (const s of [1, -1]) {
    k.sign(fr, b.sign.name, 0, 6.35 + h / 2, s * 0.32, h, 1.25, FX.NONE, s > 0 ? 0 : Math.PI);
    k.sign(fr, 'fuelPrices', 0, 4.3, s * 0.32, 1.8, 1.25, FX.NONE, s > 0 ? 0 : Math.PI);
  }
  k.box(fr, 0, 3.3, 0, 3, 2, 0.5, '#141414', { rough: 0.5 });
  // Canopy and pumps, set back from the kerb.
  const cx = -16;
  k.box(fr, cx, 5, 0, 14, 1.1, 24, b.color, { rough: 0.5 });
  k.box(fr, cx, 4.95, 0, 13.2, 0.05, 23.2, '#ffffff', { glow: 1.5 });
  for (const z of [-7, 7]) {
    k.box(fr, cx, -0.2, z, 1.2, 0.35, 8, '#c8c8c0', { rough: 0.8 });
    for (const pz of [-2.4, 2.4]) {
      k.box(fr, cx, 0.1, z + pz, 0.7, 1.8, 0.9, '#e8e8e8', { rough: 0.5 });
      k.box(fr, cx, 1.3, z + pz, 0.72, 0.35, 0.92, b.color, { rough: 0.5, glow: 0.5 });
    }
    k.box(fr, cx, 0, z, 0.5, 5, 0.5, '#d8d8d8', { rough: 0.5 });
  }
  k.light(fr.p(cx, 4.5, 0), 1, 1, 0.95, 5);
}
