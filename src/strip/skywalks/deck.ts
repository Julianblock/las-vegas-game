import { FX } from '../../world/builders';
import type { Kit } from '../kit';

/** Walking surface height over the road (m). */
export const DECK_Y = 7;
/** Deck width (m). */
export const DECK_W = 6.5;

/**
 * One straight run of a pedestrian bridge: a steel box girder with a
 * stone-grey fascia, glass balustrades each side, and the strip of warm
 * downlights that makes the bridges read as lines of gold at night.
 */
export function deckRun(k: Kit, ax: number, az: number, bx: number, bz: number) {
  const len = Math.hypot(bx - ax, bz - az);
  if (len < 0.5) return;
  const deg = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI + 180;
  const fr = k.frame((ax + bx) / 2, (az + bz) / 2, deg);
  const w = len + DECK_W * 0.5;
  k.box(fr, 0, DECK_Y - 1.4, 0, w, 1.4, DECK_W, '#d6d0c4', { rough: 0.6 });
  k.box(fr, 0, DECK_Y - 0.15, 0, w, 0.15, DECK_W - 0.4, '#a8a094', { rough: 0.9 });
  for (const z of [-1, 1]) {
    k.box(fr, 0, DECK_Y, z * (DECK_W / 2 - 0.1), w, 1.15, 0.06, '#9ab4c4', { rough: 0.1, fx: FX.GLASS });
    k.box(fr, 0, DECK_Y + 1.15, z * (DECK_W / 2 - 0.1), w, 0.08, 0.14, '#c8c8c8', { rough: 0.3, fx: FX.METAL });
  }
  for (let x = -len / 2 + 3; x < len / 2; x += 9) k.light(fr.p(x, DECK_Y - 1.5, 0), 1, 0.85, 0.6, 1.6);
}
