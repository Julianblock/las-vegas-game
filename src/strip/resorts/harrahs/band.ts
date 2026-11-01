import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/** The showroom podium's curved Strip face, from its OSM outline, north to south. */
const FACE: [number, number][] = [
  [1596, -440], [1593, -431], [1588, -413], [1585, -398], [1584, -373], [1584, -360], [1586, -344], [1589, -329], [1600, -320],
];

/**
 * A carnival band wrapping the podium: alternating purple, green and gold
 * panels with a chasing bulb line above and below, the Mardi Gras colours
 * Harrah's dressed in after 1997.
 */
export function buildBand(k: Kit) {
  const colors = ['#7a1a8a', '#1a7a3a', '#d8a830'];
  for (let i = 0; i + 1 < FACE.length; i++) {
    const [ax, az] = FACE[i];
    const [bx, bz] = FACE[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const deg = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI + 180;
    const fr = k.frame((ax + bx) / 2, (az + bz) / 2, deg);
    const n = Math.max(1, Math.round(len / 5));
    for (let j = 0; j < n; j++) {
      const x = -len / 2 + (j + 0.5) * (len / n);
      k.box(fr, x, 10, 0.5, len / n - 0.3, 6, 0.4, colors[(i * 3 + j) % 3], { rough: 0.4, fx: FX.WASH, glow: 0.8 });
    }
    for (const y of [9.6, 16.3]) k.box(fr, 0, y, 0.8, len + 0.4, 0.25, 0.2, '#ffe8a0', { glow: 1.5, fx: FX.CHASE });
  }
}
