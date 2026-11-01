import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The Montgolfier balloon marquee at Paris' south drive: a 46 m sign shaped
 * like the brothers' 1783 balloon, its equator band chasing with bulbs, on a
 * gilded basket over the LED screen.
 */
export function buildBalloon(k: Kit) {
  const fr = k.frame(1573, 510, 270);
  k.cyl(fr, 0, -0.5, 0, 2.2, 1.6, 18, '#d8c8a0', { rough: 0.5, fx: FX.METAL }, 12);
  k.box(fr, 0, 12, 0, 18, 9, 2.4, '#151515', { rough: 0.4 });
  for (const side of [1, -1]) k.sign(fr, 'parisLED', 0, 16.5, side * 1.25, 8.4, 1.2, FX.NONE, side > 0 ? 0 : Math.PI);
  k.cyl(fr, 0, 18, 0, 3.2, 4, 4, '#c8a050', { rough: 0.4, fx: FX.METAL }, 12);
  const env = new THREE.SphereGeometry(10.5, 20, 14);
  env.scale(1, 1.18, 1);
  k.geo(fr, env, 0, 34, 0, '#1a2e8a', { rough: 0.45, glow: 0.15 });
  k.geo(fr, new THREE.ConeGeometry(6.2, 6, 20).rotateX(Math.PI), 0, 25, 0, '#1a2e8a', { rough: 0.45 });
  for (const side of [1, -1]) k.sign(fr, 'parisBalloon', 0, 34, side * 10.8, 18, 1.4, FX.CHASE, side > 0 ? 0 : Math.PI);
  k.light(fr.p(0, 46, 0), 1, 0.9, 0.6, 6);
  k.glow(fr, 0, 0, 22, 20, 46, 0.3, 0.4, 1);
  k.reserve(fr, 0, 0, 12, 12);
}
