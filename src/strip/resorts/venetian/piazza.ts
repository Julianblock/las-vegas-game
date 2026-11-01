import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { pylon } from '../../parts/pylon';

/**
 * The piazzetta on the Strip: the two granite columns of St Mark (the winged
 * lion) and St Theodore, the marquee, and the canal-side walk.
 * Frame on the walk at x = 1663, +x south, +z west.
 */
export function buildPiazza(k: Kit) {
  const fr = k.frame(1663, -640, 270);
  for (const [x, saint] of [[-8, 'lion'], [8, 'theodore']] as const) {
    k.box(fr, x, -0.5, -8, 3.2, 3, 3.2, '#e8e0d0', { rough: 0.8 });
    k.cyl(fr, x, 2.5, -8, 0.95, 0.85, 14, '#8a8478', { rough: 0.5 }, 12);
    k.box(fr, x, 16.4, -8, 2.4, 1, 2.4, '#e8e0d0', { rough: 0.8 });
    if (saint === 'lion') {
      k.box(fr, x, 17.4, -8, 1.2, 1.4, 2.8, '#6a5a3a', { rough: 0.4, fx: 3 });
      k.box(fr, x, 18.3, -8, 2.8, 0.15, 1.6, '#6a5a3a', { rough: 0.4, fx: 3 });
    } else {
      k.cyl(fr, x, 17.4, -8, 0.4, 0.3, 2.6, '#f2ece2', { rough: 0.6 });
    }
  }
  k.gather(fr, 0, -6, 8, 14);
  pylon(k, fr, -70, 4, { crown: 'venetianCrown', screen: 'venetianLED', h: 32, w: 16, color: '#e8d8b8', crownH: 3 });
  for (let x = -110; x <= 160; x += 40) stripLamp(k, fr, x, 7);
  k.walk(fr, [[-120, 2], [0, 2], [180, 2]]);
}
