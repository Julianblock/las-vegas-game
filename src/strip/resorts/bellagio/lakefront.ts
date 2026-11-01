import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { pylon } from '../../parts/pylon';

/**
 * The Strip edge of Lake Bellagio: a white balustrade the length of the lake
 * where crowds line up for the fountains, Italianate lamps, and the marquee at
 * the Flamingo corner. Frame on the walk at x = 1505, +x north, +z east.
 */
export function buildBellagioLakefront(k: Kit) {
  const fr = k.frame(1505, 355, 90);
  // Balustrade: rail, coping and a balusters band, broken at the bridge entry.
  for (const [a, b] of [[-150, -12], [12, 150]]) {
    const cx = (a + b) / 2;
    const w = b - a;
    k.box(fr, cx, -0.2, -2, w, 0.35, 0.7, '#f2ede2', { rough: 0.7 });
    k.box(fr, cx, 0.15, -2, w, 0.75, 0.35, '#ece6d8', { rough: 0.7 });
    k.box(fr, cx, 0.9, -2, w, 0.18, 0.6, '#f6f2ea', { rough: 0.6 });
    for (let x = a + 6; x < b; x += 12) k.box(fr, x, -0.2, -2, 0.9, 1.6, 0.9, '#f2ede2', { rough: 0.7 });
    // Fountain crowds along the rail.
    for (let x = a + 15; x < b - 10; x += 30) k.gather(fr, x, 1.5, 6, 14);
  }
  k.walk(fr, [[-155, 1], [0, 1], [155, 1]]);
  for (let x = -140; x <= 140; x += 28) stripLamp(k, fr, x, 7);

  // The marquee near the Flamingo corner.
  pylon(k, fr, 140, 4, { crown: 'bellagioMarquee', screen: 'bellagioLED', h: 30, w: 15, color: '#e8dcc0' });
  k.sign(fr, 'bellagioMarquee', 140, 27.2, 0, 4.8, 1.2, FX.NONE, Math.PI / 2, true);
}
