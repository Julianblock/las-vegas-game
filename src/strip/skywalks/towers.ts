import { FX } from '../../world/builders';
import type { Kit } from '../kit';
import { DECK_W, DECK_Y } from './deck';

/**
 * The lift-and-escalator tower at a bridge's open end: a glass shaft for
 * the elevator, the escalator's sloping enclosure dropping toward the
 * sidewalk, and a canopy over the landing. `dx, dz` points along the bridge
 * away from the span.
 */
export function landing(k: Kit, x: number, z: number, dx: number, dz: number) {
  const deg = (Math.atan2(dz, dx) * 180) / Math.PI + 180;
  const fr = k.frame(x, z, deg);
  k.box(fr, 2.5, 0, 0, 6, DECK_Y, DECK_W, '#d6d0c4', { rough: 0.7 });
  k.box(fr, 1.5, 0, -DECK_W / 2 - 1.6, 3, DECK_Y + 3.4, 3, '#86a6b8', { rough: 0.1, fx: FX.GLASS });
  k.box(fr, 1.5, DECK_Y + 3.4, -DECK_W / 2 - 1.6, 3.4, 0.4, 3.4, '#c8c8c8', { rough: 0.4, fx: FX.METAL });
  const run = DECK_Y / Math.tan((30 * Math.PI) / 180);
  for (let i = 0; i < 6; i++) {
    const t = (i + 0.5) / 6;
    k.box(fr, 5.5 + run * t, DECK_Y * (1 - t) - 0.3, DECK_W / 2 - 1.1, run / 6 + 0.1, 0.6, 2, '#b8b2a6', { rough: 0.6 });
  }
  k.box(fr, 2.5, DECK_Y + 3, 0, 7, 0.3, DECK_W + 1, '#e8e4dc', { rough: 0.5 });
  for (const zz of [-DECK_W / 2, DECK_W / 2]) k.box(fr, 5.6, DECK_Y, zz, 0.2, 3, 0.2, '#c8c8c8', { rough: 0.4, fx: FX.METAL });
  k.light(fr.p(2.5, DECK_Y + 2.8, 0), 1, 0.9, 0.75, 2.2);
}
