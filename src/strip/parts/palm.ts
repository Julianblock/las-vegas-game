import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

const FROND = new THREE.BoxGeometry(0.5, 0.06, 4.2).translate(0, 0, 2.1);

/**
 * Mexican fan / date palm: a tapered trunk and a drooping crown of fronds.
 * `h` is trunk height; Strip medians run 12-18 m.
 */
export function palm(k: Kit, fr: Frame, x: number, z: number, h = 14, seed = 0) {
  const lean = (Math.sin(seed * 12.9898) * 0.5) * 0.06;
  k.cyl(fr, x, -0.3, z, 0.32, 0.22, h + 0.3, '#7a6a52', { rough: 0.95 }, 6);
  const top = new THREE.Vector3(x + lean * h, h, z);
  const n = 11;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + seed;
    const droop = 0.25 + ((i * 7) % 5) * 0.08;
    const m = new THREE.Matrix4().makeRotationY(a).multiply(new THREE.Matrix4().makeRotationX(droop)).setPosition(top);
    k.geoM(fr, FROND, m, i % 3 ? '#4e6a32' : '#5e7a3a', { rough: 0.9 });
  }
  k.geo(fr, new THREE.SphereGeometry(0.6, 6, 4), top.x, h - 0.3, z, '#6a5a3a', { rough: 1 });
}

/** A row of palms between two local points, every `step` metres. */
export function palmRow(k: Kit, fr: Frame, x0: number, z0: number, x1: number, z1: number, step = 12, h = 14) {
  const len = Math.hypot(x1 - x0, z1 - z0);
  const n = Math.max(1, Math.floor(len / step));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    palm(k, fr, x0 + (x1 - x0) * t, z0 + (z1 - z0) * t, h + ((i * 37) % 5) - 2, i * 1.7);
  }
}
