import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { GATEWAY } from './site';

const SEGMENTS = 18;

/**
 * The Las Vegas Boulevard Gateway Arches (2020): two white 80-foot arches
 * leaning together over the road like a showgirl's headdress, ribbed with
 * colour-changing LEDs, welcoming drivers from the Strip into downtown.
 */
export function buildArches(k: Kit) {
  const fr = k.frame(GATEWAY.x, GATEWAY.z, GATEWAY.deg, GATEWAY.span / 2 + 2, 8);
  const half = GATEWAY.span / 2;
  for (const lean of [-1, 1]) {
    let prev: THREE.Vector3 | null = null;
    for (let i = 0; i <= SEGMENTS; i++) {
      const u = i / SEGMENTS * 2 - 1;
      const y = GATEWAY.h * (1 - u * u);
      const p = new THREE.Vector3(u * half, y, lean * (4 - y * 0.12));
      if (prev) {
        k.tube(fr, prev, p, 1.1, '#f4f2ec', 0);
        k.tube(fr, prev.clone().setY(prev.y + 0.7), p.clone().setY(p.y + 0.7), 0.25, '#ff4ad0', 1.4, FX.CHASE);
      }
      prev = p;
    }
    for (const s of [-1, 1]) k.box(fr, s * half, -0.5, lean * 4, 3, 1.2, 3, '#d8d4cc', { rough: 0.7 });
  }
  k.sign(fr, 'gatewaySign', 0, GATEWAY.h - 4, -0.4, 4, 1.6, FX.NEON);
  k.sign(fr, 'gatewaySign', 0, GATEWAY.h - 4, 0.4, 4, 1.6, FX.NEON, Math.PI);
}
