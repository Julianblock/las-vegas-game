import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { jester } from '../../parts/jester';
import { stripLamp } from '../../parts/lamp';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';

/**
 * Harrah's Strip face (frame on the east walk facing west, local +x south):
 * the gilded Mardi Gras frontage with its jester figures over the doors, a
 * scalloped canopy and the marquee pylon at the north corner.
 */
export function buildFacade(k: Kit) {
  const fr = k.frame(1586, -385, 270);
  k.box(fr, 0, 8, -2, 120, 1.2, 6, '#c89a2a', { rough: 0.4, fx: FX.METAL });
  for (let x = -58; x <= 58; x += 6) k.cyl(fr, x, 7.4, 1, 1.6, 1.6, 0.5, '#e8c04a', { rough: 0.4, fx: FX.METAL, glow: 0.6 }, 10);
  k.box(fr, 0, 7.8, 0.9, 118, 0.12, 0.2, '#ffe8a0', { glow: 1.4, fx: FX.CHASE });
  k.storefront(fr, -6, 2.4, 44, 6, 1);
  for (const x of [-36, -12, 12, 36]) {
    k.box(fr, x, 9.2, -2, 6, 6, 3, '#7a1a8a', { rough: 0.5 });
    jester(k, fr, x, 15.2, -2, 5);
  }
  pylon(k, fr, -62, 6, { crown: 'harrahsCrown', screen: 'harrahsLED', h: 26, w: 13, color: '#8a1a1a' });
  palmRow(k, fr, -50, 8, 50, 8, 14, 12);
  for (const x of [-30, 0, 30]) stripLamp(k, fr, x, 11);
  k.walk(fr, [[-64, 4], [0, 3], [64, 4]]);
  k.gather(fr, 0, 2, 20, 30);
}
