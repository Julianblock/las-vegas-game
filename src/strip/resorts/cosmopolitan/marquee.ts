import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { palmRow } from '../../parts/palm';

/**
 * The Cosmopolitan on the Strip: its slim, very tall LED marquee (two
 * back-to-back portrait screens on a dark fin) and the glazed podium face
 * over the Strip walk, a band of screens wrapping its parapet.
 * Frame on the west walk, facing the boulevard.
 */
export function buildMarquee(k: Kit) {
  const fr = k.frame(1503, 600, 90);
  k.reserve(fr, 0, 0, 8, 4);
  k.box(fr, 0, -1, 0, 3, 54, 2.6, '#141418', { rough: 0.3, fx: FX.METAL });
  k.box(fr, 0, 14, 0, 18.4, 38, 2, '#0a0a0c', { rough: 0.3 });
  for (const s of [1, -1]) k.sign(fr, 'cosmoLED', 0, 33, s * 1.05, 36, 1.3, FX.NONE, s > 0 ? 0 : Math.PI);
  k.beacons(fr, 0, 0, 2, 53);
  // Podium screens along the frontage (local x is north).
  const pod = k.frame(1500, 660, 90);
  k.storefront(pod, 0, -2, 90, 7, 1);
  for (let x = -40; x <= 40; x += 16) k.sign(pod, 'cosmoLED', x, 14, -1.6, 9, 1.2, FX.NONE);
  palmRow(k, pod, -50, 4, 50, 4, 12, 12);
  for (const x of [-36, 0, 36]) stripLamp(k, pod, x, 8);
}
