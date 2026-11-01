import { FX, type Frame } from '../../../world/builders';
import type { Kit } from '../../kit';
import type { Brand } from '../brand';

/**
 * The fast-food pole sign: a steel mast lifting a double-faced cabinet high
 * enough to clear the shopping-centre roofs. Faces read up and down the street.
 */
export function tallPole(k: Kit, fr: Frame, b: Brand) {
  const h = b.h ?? 3.4;
  const w = h * (k.rects[b.sign.name]?.aspect ?? 2);
  const top = 11;
  k.cyl(fr, 0, -0.5, 0, 0.35, 0.3, top + 0.5, b.color, { rough: 0.5, fx: FX.METAL }, 8);
  k.box(fr, 0, top, 0, w + 0.4, h + 0.4, 0.8, b.color, { rough: 0.5 });
  k.sign(fr, b.sign.name, 0, top + h / 2 + 0.2, 0.42, h, 1.25, FX.NONE);
  k.sign(fr, b.sign.name, 0, top + h / 2 + 0.2, -0.42, h, 1.25, FX.NONE, Math.PI);
}
