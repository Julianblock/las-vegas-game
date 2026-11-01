import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

const SPIRE = new THREE.ConeGeometry(1, 1, 7).translate(0, 0.5, 0);

/** Italian cypress: a dark green spire, the Roman and Tuscan resorts' signature tree. */
export function cypress(k: Kit, fr: Frame, x: number, z: number, h = 11) {
  const g = SPIRE.clone().scale(h * 0.11, h, h * 0.11);
  k.geo(fr, g, x, -0.2, z, '#2e4a2a', { rough: 0.95 });
}

/** A row of cypresses between two local points. */
export function cypressRow(k: Kit, fr: Frame, x0: number, z0: number, x1: number, z1: number, step = 6, h = 11) {
  const n = Math.max(1, Math.round(Math.hypot(x1 - x0, z1 - z0) / step));
  for (let i = 0; i <= n; i++) cypress(k, fr, x0 + ((x1 - x0) * i) / n, z0 + ((z1 - z0) * i) / n, h + ((i * 13) % 3) - 1);
}
