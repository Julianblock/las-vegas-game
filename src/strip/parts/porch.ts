import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/** A run of lit ground-floor glazing with an awning band: casino entries, shops. */
export function arcade(k: Kit, fr: Frame, x: number, z: number, w: number, h: number, band: string, glow = 0.9) {
  k.storefront(fr, x, z, w, h, glow);
  k.box(fr, x, h, z + 0.6, w + 1, 1.1, 1.6, band, { rough: 0.5 });
  k.light(fr.p(x, h - 0.5, z + 1.5), 1, 0.85, 0.6, 2.6);
}
