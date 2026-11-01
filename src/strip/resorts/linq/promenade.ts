import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';

/** The promenade's surveyed centreline, Strip to the wheel (world x, z). */
const LINE: [number, number][] = [[1560, -158], [1668, -168], [1758, -176], [1813, -181], [1897, -188], [1940, -190]];

/**
 * The LINQ Promenade (2014): the open-air street from the Strip to the High
 * Roller, shopfronts both sides, festoon lights strung overhead, palms and
 * crowds day and night.
 */
export function buildPromenade(k: Kit) {
  for (let i = 0; i + 1 < LINE.length; i++) {
    const [ax, az] = LINE[i];
    const [bx, bz] = LINE[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const deg = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI;
    // Frame along the segment: local x runs east down the street, z across it.
    const fr = k.frame((ax + bx) / 2, (az + bz) / 2, deg + 180);
    for (const side of [-1, 1]) {
      k.box(fr, 0, -0.3, side * 13, len, 9, 6, side > 0 ? '#c8b8a0' : '#b8a890', { rough: 0.8, fx: FX.WASH, glow: 0.3 });
      k.storefront(fr, 0, side * 9.9, len - 4, 4.2, 1);
      for (let x = -len / 2 + 6; x < len / 2; x += 18) palm(k, fr, x, side * 7, 9, x);
    }
    // Festoon strings zig-zagging overhead.
    for (let x = -len / 2; x < len / 2; x += 6) {
      k.tube(fr, new THREE.Vector3(x, 8, -9.5), new THREE.Vector3(x + 3, 6.8, 9.5), 0.06, '#ffe8b0', 1.4, FX.CHASE);
      k.light(fr.p(x + 1.5, 7.4, 0), 1, 0.85, 0.55, 1.2);
    }
    k.gather(fr, 0, 0, 7, 22);
  }
  const walk: [number, number][] = LINE.map(([x, z]) => [x, z]);
  k.crowd.walks.push(walk.flat());
  // Entry arch on the Strip end.
  const arch = k.frame(1572, -159, 270);
  for (const s of [-1, 1]) k.box(arch, s * 9, -0.5, 0, 1.6, 9, 1.6, '#1a1620', { rough: 0.4 });
  k.box(arch, 0, 8.5, 0, 20, 2.4, 1.4, '#1a1620', { rough: 0.4 });
  k.sign(arch, 'promenadeArch', 0, 9.7, 0.75, 2, 1.2, FX.NONE, 0, true);
}
