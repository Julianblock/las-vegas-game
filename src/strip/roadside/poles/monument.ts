import { FX, type Frame } from '../../../world/builders';
import type { Kit } from '../../kit';
import type { Brand } from '../brand';

/** A low monument sign on a stucco plinth, the newer pad-site standard. */
export function monument(k: Kit, fr: Frame, b: Brand) {
  const h = b.h ?? 1.6;
  const w = h * (k.rects[b.sign.name]?.aspect ?? 2);
  k.box(fr, 0, -0.3, 0, w + 1, 1.1, 1, '#c8b8a0', { rough: 0.9 });
  k.box(fr, 0, 0.8, 0, w + 0.4, h + 0.3, 0.7, b.color, { rough: 0.5 });
  k.sign(fr, b.sign.name, 0, 0.95 + h / 2, 0.37, h, 1.2, FX.NONE);
  k.sign(fr, b.sign.name, 0, 0.95 + h / 2, -0.37, h, 1.2, FX.NONE, Math.PI);
}
