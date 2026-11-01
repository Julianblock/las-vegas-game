import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { pylon } from '../../parts/pylon';
import { WHEEL } from './wheel';

/**
 * The LINQ: crown on the hotel, the High Roller's static legs and boarding
 * hall, the Fly LINQ zipline tower, and the Strip pylon.
 */
export function buildLinq(k: Kit) {
  k.sign(k.frame(1660, -285, 270), 'linqCrown', 0, 60, 0.6, 7, 1.5, FX.NEON);

  // Wheel legs: an A-frame on the spindle side (east), with a back stay.
  const fr = k.frame(WHEEL.x, WHEEL.z, 270);
  const hub = new THREE.Vector3(0, WHEEL.hub, -9);
  for (const s of [-1, 1]) {
    k.tube(fr, new THREE.Vector3(s * 52, -1, -9), hub, 3.2, '#e8ecef', 0, FX.METAL);
  }
  k.tube(fr, new THREE.Vector3(0, -1, -40), hub, 2.4, '#e8ecef', 0, FX.METAL);
  k.box(fr, 0, -0.5, 22, 60, 7, 18, '#d8dde2', { rough: 0.3, fx: FX.GLASS, glow: 0.5 });
  k.sign(fr, 'highRollerSign', 0, 9.5, 31.2, 4, 1.4, FX.NEON);
  k.reserve(fr, 0, -10, 60, 40);
  k.gather(fr, 0, 16, 10, 24);

  // Fly LINQ: the 37 m launch tower at the east end; cables run west to the Strip.
  const z = k.frame(1905, -200, 270);
  k.box(z, 0, -0.5, 0, 12, 38, 12, '#2a2a30', { rough: 0.4, fx: FX.METAL });
  k.box(z, 0, 37.5, 0, 16, 1.2, 16, '#e83a8a', { rough: 0.4, glow: 0.8 });
  for (let i = 0; i < 5; i++) {
    const off = -6 + i * 3;
    k.tube(z, new THREE.Vector3(off, 36, 4), new THREE.Vector3(off, 9, 335), 0.05, '#bbbbbb', 0);
  }

  const st = k.frame(1576, -215, 270);
  pylon(k, st, 0, 4, { crown: 'linqCrown', screen: 'linqLED', h: 30, w: 15, color: '#2a2230' });
  for (let x = -80; x <= 40; x += 40) stripLamp(k, st, x, 7);
}
